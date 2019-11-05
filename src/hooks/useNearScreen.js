import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(function () {
    let observer
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(isIntersecting)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
    return () => {
      observer.unobserve()
    }
  }, [element])

  return [
    show,
    element
  ]
}
