import Slide from '../components/Slide'
import slide1 from "../asset/slide1.png"
import slide2 from "../asset/slide2.png"

const Home = () => {

  const Slides = [
    {"src" : slide1, "alt" : slide1},
    {"src" : slide2, "alt" : slide2},
  ]

  return (
    <div className='home'>

      <div className='slides'>
        <div>
          <Slide  slide={Slides}/>
        </div>
      </div>
      
    </div>
  )
}

export default Home