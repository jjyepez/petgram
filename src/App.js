import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ListOfCategories />
    </div>
  )
}

export default App
