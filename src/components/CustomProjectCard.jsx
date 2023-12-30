import './css/CustomProjectCard.css'
import ProjectFlipCard from './ProjectFlipCard';



const CustomProjectCard = ({projectType, title, description, side, img}) => {

  return (
    <div className='body'>
      {side==="left" && <ProjectFlipCard projectType={projectType} title={title} description={description}/>}
      <div className='img-container'>
        <img src={img} alt='...' className='img'/>
      </div>
      {side==="right" && <ProjectFlipCard projectType={projectType} title={title} description={description}/>}
    </div>
  )
}

export default CustomProjectCard