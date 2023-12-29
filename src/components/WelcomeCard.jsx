import './css/WelcomeCard.css'
import { useNavigate } from "react-router-dom";

const WelcomeCard = () => {
  const navigate = useNavigate()

  const navigateProjects = () => {
    navigate("/projects")
  }

  return (
    <div className='welcome-container'>
        <div className='welcome-card'>
            <h2 className='welcome-text'>Hello, i'm<br/>Daniel Peterson.</h2>
            <div className='info-card'>
                <h3 className={`info-text border-info`}>full-time student</h3>
                <h3 className='info-text'>aspiring web developer</h3>
            </div>

            <div className='welcome-navigation'>
                <button onClick={navigateProjects} className='project-button'>Projects</button>
            </div>
        </div>
    </div>
  )
}

export default WelcomeCard