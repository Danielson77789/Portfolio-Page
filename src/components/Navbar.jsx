import './css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-body'>
      <div className='logo-container'>
        <h2>Daniel Peterson</h2>
      </div>
      <div className='navigation-container'>
        <div className='home-button-container'>
          <button>Home</button>
        </div>
        <div className='project-button-container'>
          <button>Projects</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar