import './css/WelcomeCard.css'
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import CircleAnimation from './CircleAnimation';

const WelcomeCard = () => {
  const navigate = useNavigate()

  const navigateProjects = () => {
    navigate("/projects")
  }

  return (
    <div className='welcome-container'>
        <div className='welcome-card'>
            <h2 className='welcome-text'>Hello, I&#39;m<br/>Daniel Peterson.</h2>
            <div className='info-card'>
                <h3 className={`info-text border-info`}>full-time student</h3>
                <h3 className='info-text'>aspiring web developer</h3>
            </div>

            <div className='welcome-navigation'>
                <button onClick={navigateProjects} className='project-button'>Projects</button>
                <a href='https://www.linkedin.com/in/daniel-peterson-bbab641b8/'><button onClick={navigateProjects} className='linkedin-button'><FaLinkedin size='15' className='linkedin-icon' />Linkedin</button></a>
            </div>

            {/* <CircleAnimation></CircleAnimation> */}
            
        </div>
    </div>
  )
}

export default WelcomeCard