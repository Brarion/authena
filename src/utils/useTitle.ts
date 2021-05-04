import React from 'react'

export const useTitle = (title: string, deps: Array<any> = []) => {
  React.useEffect(() => {
    document.title = title
  }, deps)
}
