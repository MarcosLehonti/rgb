
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Styles/Hoviu.css'
import Portada from './assets/Fragmentos_Express_Hoviu/portada.jpg'
import kangue  from './assets/Fragmentos_Express_Hoviu/portada.jpg'
import Navbar from './Navbar'

function Hoviu() {
  
 const navigate = useNavigate();
  return (
  <>
      <Navbar/>
      {/* TÍTULO */}
      <div className="container">
            <div class="comic-card">
              <div class="comic-image">
                <img src={Portada} alt="Portada del cómic" />
              </div>
              <div class="comic-info">
                <h2>Fragmentos Express de Hoviu</h2>
                <p>Dicen que cada día es una oportunidad nueva… pero yo siento que cada día es más pesado que el anterior. 
                  No hay instrucciones para sobrellevar el vacío, solo fragmentos. No sé en qué momento todo empezó a sentirse distinto. 
                  Cada día parece igual, pero dentro de mí algo se rompe y se recompone en silencio.</p>
                <button
                          className="btn btn-kangue"
                          onClick={() => navigate('/fragmentosexpresshoviu')}
                          >
                          Leer
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

export default Hoviu
