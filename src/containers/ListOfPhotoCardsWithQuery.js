import React from 'react'
import { ListOfPhotocardsComponent } from '../components/ListOfPhotocards'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
    query getPhotos ($categoryId: ID) {
        photos (categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
`

export const ListOfPhotocardsWithQuery = ({ categoryId }) => (
  <Query query={query} variables={{ categoryId }}>
    {
      ({ loading, error, data }) => {
        if (loading) return null
        return <ListOfPhotocardsComponent data={data} />
      }
    }
  </Query>
)
