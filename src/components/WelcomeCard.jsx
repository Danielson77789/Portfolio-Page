import './css/WelcomeCard.css'

const WelcomeCard = () => {
  return (
    <div className='welcome-container'>
        <div className='welcome-card'>
            <h2 className='welcome-text'>Hello, i'm<br/>Daniel Peterson.</h2>
            <div className='info-card'>
                <h3 className={`info-text border-info`}>full-time student</h3>
                <h3 className='info-text'>aspiring web developer</h3>
            </div>

            <div className='welcome-navigation'>
                <button className='project-button'>Projects</button>
            </div>
        </div>
    </div>
  )
}

export default WelcomeCard