import React, { useState, useContext } from 'react'

const BlogContext = React.createContext()

const BlogProvider = ({children}) => {
  const [userPreferences, setUserPreferences] = useState({
    theme:'black', 
    locale: 'fr_FR'
  })

  const contextValue = {
    userPreferences, 
    onThemeChange: () =>{
      setUserPreferences({
        ...userPreferences, 
        theme: userPreferences.theme ==='light' ? 'dark' : 'light'
      })
    }
  }
  return (
    <BlogContext.Provider  value={contextValue}>
      {children}
    </BlogContext.Provider>
  )
}

const useBlog = () =>{
  const context = useContext(BlogContext)
  if (context === undefined){
    throw new Error (`une erreur s'est produit dans le context `)
  }
  return context 
}

export {BlogProvider, useBlog}