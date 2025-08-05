import { useState } from 'react'
import './Styles/Fragmentos_Express_Hoviu.css'



import img1 from '../src/assets/Fragmentos_Express_Hoviu/pagina1.jpg'
import img2 from '../src/assets/Fragmentos_Express_Hoviu//pagina2.jpg'
import img3 from '../src/assets/Fragmentos_Express_Hoviu//pagina3.jpg'
import img4 from '../src/assets/Fragmentos_Express_Hoviu//pagina4.jpg'
import Navbar from './Navbar'


const images = [img1, img2, img3, img4]

function Fragmentos_Express_Hoviu() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
    <Navbar/>
    
    
    <div className="carousel-container">

      <div className="carousel">
        <button className="nav left" onClick={prevSlide}>&#10094;</button>

        <div className="carousel-image-wrapper">
          <img src={images[current]} alt={`Página ${current + 1}`} />
        </div>

        <button className="nav right" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="carousel-indicator">
        Página {current + 1} / {images.length}
      </div>
    </div>

    </>
  )
}

export default Fragmentos_Express_Hoviu