import React { createContext, useState, useEffect} from 'react'
import Pixaby from './Pixaby/Test'

const Theme = createContext()

const App = () => {
  const [theme, setTheme]  = useState('light')

  useEffect(() => {
    document.body.className = theme
  },[theme])

  function ChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div>
      <Theme.Provider value={{theme, ChangeTheme}}>
      <Pixaby />
      </Theme.Provider>
    </div>
  )
}

export {Theme}
export default App
