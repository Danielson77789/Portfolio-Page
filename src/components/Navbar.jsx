import { useEffect } from 'react'
import { FiMenu } from "react-icons/fi"
import './css/Navbar.css'
import MenuModal from './MenuModal'

const Navbar = () => {

  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
    localStorage.setItem('setTheme', 'dark')
  }
  
  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
    localStorage.setItem('setTheme', 'light')
  }

  const toggleTheme = () => {
    if (document.querySelector("body").getAttribute('data-theme') === 'dark') setLightMode();
    else setDarkMode();
  }

  useEffect(() => {
    const curTheme = localStorage.getItem('setTheme')
      console.log(curTheme)
    if(curTheme === 'light') {
      setLightMode()
    } else {setDarkMode()}
  },[])


  return (
    <div className='navbar-body'>
      <div className='logo-container'>
        <h2>Daniel Peterson</h2>
      </div>
      <div className='navigation-container'>
      <button onClick={toggleTheme} type='checkbox'>Theme</button>
      <div>
        <MenuModal/>
      </div>
      </div>
    </div>
  )
}

export default Navbar