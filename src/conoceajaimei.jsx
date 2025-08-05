import { useNavigate } from 'react-router-dom'
import conoceajaimei from './assets/conoceajaimei.jpg'
import conoceakangue from './assets/conociendoKangue.jpg'
import conoceaHoviu from './assets/conociendoHoviu.jpg'
import Navbar from './Navbar'
import './Styles/ConoceaJaimei.css'

function ConoceaJaimei() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="jaimei-page">
        <img src={conoceajaimei} alt="Conoce a Jaimei" className="jaimei-image" />
        <img src={conoceakangue} alt="Conoce a Jaimei" className="jaimei-image" />
        <img src={conoceaHoviu} alt="Conoce a Jaimei" className="jaimei-image" />
      </div>
    </>
  )
}

export default ConoceaJaimei
