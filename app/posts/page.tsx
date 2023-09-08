import { Suspense } from 'react'

import { ListOfPosts } from './ListOfPosts'

export default function Posts () {
  return (
    <section>
      <Suspense fallback={<p>Cargando posts...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}
