import intro from '../assets/intro.png'
import vision from '../assets/our-vision.png'
import process from '../assets/simplified-process.png'

const HomePage = () => {
  return (
    <div>
      <img className='home-picture' src={intro} alt="Intro" />
      <img className='home-picture' src={vision} alt="vision" />
      <img className='home-picture' src={process} alt="process" />

    </div>
  )
}

export default HomePage;