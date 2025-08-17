import { useState } from 'react'
import './Styles/Fragmentos_Express_Hoviu.css'


import portada from '../src/assets/Fragmentos_Express_Hoviu/portada.jpg'
import division1 from '../src/assets/Fragmentos_Express_Hoviu/Separacion1.jpg'
import img1 from '../src/assets/Fragmentos_Express_Hoviu/pagina11.jpg'
import division2 from '../src/assets/Fragmentos_Express_Hoviu/Separacion2.jpg'
import img2 from '../src/assets/Fragmentos_Express_Hoviu//pagina21.jpg'
import division3 from '../src/assets/Fragmentos_Express_Hoviu/Separacion3.jpg'
import img3 from '../src/assets/Fragmentos_Express_Hoviu//pagina31.jpg'
import division4 from '../src/assets/Fragmentos_Express_Hoviu/Separacion4.jpg'
import img4 from '../src/assets/Fragmentos_Express_Hoviu//pagina41.jpg'
import Navbar from './Navbar'


const images = [portada,division1,img1, division2,img2,division3, img3,division4, img4]

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