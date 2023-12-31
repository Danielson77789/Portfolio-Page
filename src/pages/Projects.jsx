import CustomProjectCard from '../components/CustomProjectCard'
import Navbar from '../components/Navbar'
import '../components/css/Projects.css'
import bloomFlip from '../components/assets/bloom-flip.gif'
import towerDefence from '../components/assets/tower-def.gif'
import random from '../components/assets/random.gif'
import { PiVault } from "react-icons/pi";


const Projects = () => {
  return (
    <div className='projects-body'>
      <Navbar/>
      <div className='header-container'>
        <h2 className='header'>
          Project<br/>Vault<PiVault/>
        </h2>
        <div className='header-line'/>
      </div>
      <div className='projects-container'>

          <div className='card-four'>
              <CustomProjectCard img={bloomFlip} side="left" title="Bloom-Flip" projectType="Unity Game Development" description="Bloom-Flip was a game I created for the Untitled Game Jam #23 which took place on itch.io.
              This project helped me learn some of the basics of unity such as level selection, post-processing such as bloom effects, and enemy ai basics."/>
          </div>

          <div className='card-four'>
              <CustomProjectCard img={random} side="right" title="Simple Neural Network" projectType="C Cuda Development" description="This project was a final for a GPU Computing class where we learned to use cuda framework in C to utilize the GPU computation 
              power on various projects throughout the quarter. For are final project we chose to attempt a simple neural network. This network was implemented both with and without cuda."/>
          </div>

          <div className='card-four'>
              <CustomProjectCard position='pos2' img={towerDefence} side="left" title="Tower Defense" projectType="Unity Game Development" description="In this unity project that me and my team had put together for are software architecture class I learned processes that involve
              application development. Some of the key concepts of this projects were the development operations and design practices used to achieve the final product."/>
          </div>

          {/* <div className='project-card-container'>
            <div className='card-one'>
              <ProjectCard className="card-one" header="Bloom-Flip" disc="Bloom-Flip was a game I created for the Untitled Game Jam #23 which took place on itch.io.
              This project helped me learn some of the basics of unity such as level selection, post-processing such as bloom effects, and enemy ai basics." imgLink="src\components\assets\bloomFlipCapture.PNG"/>
            </div>
            <div className="card-two">
              <ProjectCard className="card-two" header="Simple Neural Network" disc="This project was a final for a GPU Computing class where we learned to use cuda framework in C to utilize the GPU computation 
              power on various projects throughout the quarter. For are final project we chose to attempt a simple neural network. This network was implemented both with and without cuda." imgLink="src\components\assets\NeuralNetworkCapture.PNG"/>
            </div>
            <div className="card-three">
              <ProjectCard className="card-three" header="Tower Defense" disc="In this unity project that me and my team had put together for are software architecture class I learned processes that involve
              application development. Some of the key concepts of this projects were the development operations and design practices used to achieve the final product." imgLink="src\components\assets\towerDefenceCapture.PNG"/>
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default Projects