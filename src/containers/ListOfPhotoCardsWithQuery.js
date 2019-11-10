import React from 'react'
import { ListOfPhotocardsComponent } from '../components/ListOfPhotocards'

import { Query } from 'react-apollo'

import { GET_PHOTOS } from '../models/useCases'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Cargando ...</p>
  if (error) return <p>Error ...</p>
  return <ListOfPhotocardsComponent data={data} />
}

export const ListOfPhotocardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    {
      renderProp
    }
  </Query>
)
