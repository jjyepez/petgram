import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { Query } from 'react-apollo'

import { GET_SINGLE_PHOTO } from '../models/useCases'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Cargando ...</p>
  if (error) return <p>Error ...</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      renderProp
    }
  </Query>
)
