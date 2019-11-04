import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotocards } from './components/ListOfPhotocards'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotocards />
    </div>
  )
}

export default App
