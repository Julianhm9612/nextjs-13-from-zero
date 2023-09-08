'use client'

import { useState } from 'react'

export function LikeButton ({ id }: any) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤' : '♡'}
    </button>
  )
}
