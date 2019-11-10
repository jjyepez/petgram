import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotocardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}
