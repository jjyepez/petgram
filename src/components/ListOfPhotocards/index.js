import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotocards = () => {
  let i = 0
  return (
    <ul>
      {
        Array(20).fill().map(photocard => <PhotoCard key={i++} />)
      }
    </ul>
  )
}
