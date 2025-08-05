
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Styles/Kangue.css'
import kangue from './assets/kangue.png'
import Navbar from './Navbar'


function Kangue() {
  
  const navigate = useNavigate();

  return (

    <>
    <Navbar/>
      {/* TÍTULO */}
<div className="container">
      <div class="comic-card">
        <div class="comic-image">
          <img src={kangue} alt="Portada del cómic" />
        </div>
        <div class="comic-info">
          <h2>Sopesar Vol1</h2>
          <p>Esta es una breve descripción del cómic, puedes contar de qué trata o dejar un mensaje introductorio.</p>
          <button
                    className="btn btn-kangue"
                    onClick={() => navigate('/sopesarvol1')}
                    >
                    Saber más
                </button>  
        </div>
      </div>
        <div class="comic-card">
        <div class="comic-image">
          <img src={kangue} alt="Portada del cómic" />
        </div>
        <div class="comic-info">
          <h2>Título del cómic</h2>
          <p>Esta es una breve descripción del cómic, puedes contar de qué trata o dejar un mensaje introductorio.</p>
          <button
                    className="btn btn-kangue"
                    onClick={() => navigate('/')}
                    >
                    Saber más
                </button>  
        </div>
      </div>
      
</div>
    </>
  )
}

export default Kangue
