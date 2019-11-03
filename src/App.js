import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotocards } from './components/ListOfPhotocards'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotocards />
    </div>
  )
}

export default App
