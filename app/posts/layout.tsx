'use client'

import { Counter } from './Counter';

export default function PostsLayout ({ children }: any) {
  return (
    <div>
      <Counter />
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}
