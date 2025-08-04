import { useNavigate } from 'react-router-dom'
import conoceajaimei from './assets/conceajaimei.png'
import Navbar from './Navbar'
import './Styles/ConoceaJaimei.css'

function ConoceaJaimei() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="jaimei-page">
        <img src={conoceajaimei} alt="Conoce a Jaimei" className="jaimei-image" />
        <img src={conoceajaimei} alt="Conoce a Jaimei" className="jaimei-image" />
        <img src={conoceajaimei} alt="Conoce a Jaimei" className="jaimei-image" />
      </div>
    </>
  )
}

export default ConoceaJaimei
