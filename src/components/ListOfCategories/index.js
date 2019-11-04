import React, {
  useState, useEffect
} from 'react'

import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    // traer info desde una API
    window.fetch('https://petgram-server.jjyepez.now.sh/categories')
      .then(rslt => rslt.json())
      .then(json => setCategories(json))
  }, [])

  useEffect(function () {
    // manejo de scroll y visualización de menú fijo
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200 // boolean
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      <List className={fixed ? 'fixed' : ''}>
        {
          categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
