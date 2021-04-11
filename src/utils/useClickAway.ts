import React from 'react'

export const useClickAway = (ref: React.MutableRefObject<any>, handler: (event: any) => void) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (ref && ref.current !== null && !ref.current.contains(event.target)) handler(false)
    }

    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [])
}
