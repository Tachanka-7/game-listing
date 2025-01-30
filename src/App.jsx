import { useEffect, useState } from 'react'
import Home from './pages/home'
import Header from './components/Header'
import './App.css'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [theme,setTheme]=useState('dark')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme'):'dark')
  },[])

  return (
    <ThemeContext.Provider value={{theme,setTheme}}> 
      <div className={`${theme} ${theme=='dark'? 'bg-black': null} min-h-[100-vh]`}>
      <Header/>
      <Home/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
