import { useEffect } from 'react'
import './css/Navbar.css'
import MenuModal from './MenuModal'
import { FaRegLightbulb } from "react-icons/fa";

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
        <div className='theme-container'>
          <button onClick={toggleTheme} type='checkbox' className='theme-button'><FaRegLightbulb color='#ab47bc' size='20'/></button>
        </div>
        <div className='menu-container'>
          <MenuModal/>
        </div>
      </div>
    </div>
  )
}

export default Navbar