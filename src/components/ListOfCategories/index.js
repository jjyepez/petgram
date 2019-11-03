import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = (props) => {
  return (
    <List>
      {
        [1, 2, 3, 4].map((category, i) => <Item key={i}><Category /></Item>)
      }
    </List>
  )
}
