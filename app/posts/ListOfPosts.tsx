import Link from 'next/link'

import { LikeButton } from './LikeButton'

const fetchPosts = () => {
  // return fetch('https://jsonplaceholder.typicode.com/posts')  // static getStaticProps
  //   .then(res => res.json())
  // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })  // servr side getServerSideProps
  //   .then(res => res.json())
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60 // Incremental static regeneration
    }
  })
    .then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map((post: any) => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
}
