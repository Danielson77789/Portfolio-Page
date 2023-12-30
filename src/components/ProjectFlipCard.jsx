import './css/ProjectFlipCard.css'
import { FaUnity } from "react-icons/fa";
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';



const ProjectFlipCard = ({projectType, title, description}) => {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip)
  }

  return (
    <ReactCardFlip flipDirection='vertical' isFlipped={flip}>
    <div className="card">
        <div className='info-container'>
            <div className='info-header'>
                <h3><FaUnity/> {projectType}</h3>
            </div>
            <div className='info-title'>
                <h2>{title}</h2>
            </div>
            <div className='card-button-container'>
                <button className='card-button' onClick={()=>{handleClick()}}>Read More</button>
            </div>
        </div>
    </div>
    
    <div className="card card-back">
        <div className='project-container'>
            <div className='project-title'>
                <h3>Project Description</h3>
            </div>
            <div className='project-description-container'>
                <p className='project-description'>
                {description}
                </p>
            </div>
            <div className='card-button-container'>
                <button className='card-button' onClick={()=>{handleClick()}}>Read More</button>
            </div>
        </div>
    </div>
    </ReactCardFlip>
  )
}

export default ProjectFlipCard