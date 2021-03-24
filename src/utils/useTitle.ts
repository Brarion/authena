import React from 'react'

export const useTitle = (title: string) => {
  React.useEffect(() => {
    document.title = title
  }, [])
}
