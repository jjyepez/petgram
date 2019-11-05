import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [show, setShow] = useState(false)

  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (err) {
      console.log(err)
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (err) {
      console.log(err)
    }
  }

  return [
    storedValue,
    setLocalStorage
  ]
}
