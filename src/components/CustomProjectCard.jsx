import './css/CustomProjectCard.css'
import ProjectFlipCard from './ProjectFlipCard';



const CustomProjectCard = ({projectType, title, description, side, img, position}) => {

  return (
    <div className='body'>
      {side==="left" && <ProjectFlipCard projectType={projectType} title={title} description={description}/>}
      <div className='img-container'>
        {side==="left" && <img src={img} alt='...' className={`imgL ${position}`}/>}
        {side==="right" && <img src={img} alt='...' className='imgR'/>}
      </div>
      {side==="right" && <ProjectFlipCard projectType={projectType} title={title} description={description}/>}
    </div>
  )
}

export default CustomProjectCard