import React, { createContext, useState } from 'react'

export const ScrollbarContext = createContext({
  scrollbarHidden: false,
  setScrollbarHidden: () => {}
})

export const ScrollbarContextProvider = ({ children }) => {
  const [scrollbarHidden, setScrollbarHidden] = useState(false)

  return (
    <ScrollbarContext.Provider
      value={{
        scrollbarHidden,
        setScrollbarHidden
      }}
    >
      {children}
    </ScrollbarContext.Provider>
  )
}
