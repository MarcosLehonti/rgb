import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Styles/inicio.css'
import Navbar from './Navbar'
import kangue from './assets/kangueIns.jpg'
import jaimei from './assets/jaimeiIns.jpg'
import hoviu from './assets/HoviuInsta.jpg'
import conocenos from './assets/conocenosrgb.jpg'
import sobrenostros from './assets/lentes.jpg'
import kangueins from './assets/kangueIns.jpg'
import hoviuIns from './assets/HoviuInsta.jpg'
import jaimeiIns from './assets/jaimeiIns.jpg'


function Inicio() {

  const navigate = useNavigate()

  const frases = [
    'Kangue ha’e che réra ha ndachekyhyjéi rombopota haguã',
    'Jaimei ha’e, yvága ha’e che sa’y, upépe oñembyatý árañu pororó',
    'Hoviu ha’e, hovyũ ha’e che mba’e, ndaikotevẽi nde rehe ni avavére',
  ]

  const [indice, setIndice] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % frases.length)
    }, 2000) // Cambia cada 2 segundos

    return () => clearInterval(intervalo)
  }, [])

  const notas = [
    {
      imagen: kangueins,
      frases: [
        "Rojo como mi fuerza interior",
        "Mi energía no se detiene",
        "Con decisión y coraje",
      ],
    },
    {
      imagen: jaimeiIns,
      frases: [
        "Azul como mis pensamientos",
        "Pienso antes de actuar",
        "Buscando la armonía",
      ],
    },
    {
      imagen: hoviuIns,
      frases: [
        "Verde como mi libertad",
        "Camino a mi ritmo.....",
        "La naturaleza me guía",
      ],
    },
  ]

  const [fraseIndices, setFraseIndices] = useState(notas.map(() => 0))

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFraseIndices(prevIndices =>
        prevIndices.map((indice, i) =>
          (indice + 1) % notas[i].frases.length
        )
      )
    }, 300000)

    return () => clearInterval(intervalo)
  }, [])




  return (
    <>
    <Navbar />
      {/* TÍTULO */}
      <h1 className="main-title">R-G-B</h1>

      {/* CARRUSEL DE TEXTO */}
      <div className="carousel-text">
        <p>{frases[indice]}</p>
      </div>

      <div className="full-container">
        <div className="card-gallery">
          {/* TARJETAS */}
          <div className="card-group">
                <div className="card">
                    <img src={kangue} alt="Kangue" />
                    <p>Kangue Pyta</p>
                </div>
                <button
                    className="btn btn-kangue"
                    onClick={() => navigate('/kangue')}
                    >
                    Saber más
                </button>     
         </div>

          <div className="card-group">
            <div className="card">
              <img src={jaimei} alt="Jaimei" />
              <p>Jaimei Hovy</p>
            </div>
            <button className="btn btn-jaimei"
              onClick={()=> navigate('/jaimei')}

              >Ver historia
            </button>
          </div>

          <div className="card-group">
            <div className="card">
              <img src={hoviu} alt="Hoviu" />
              <p>Hoviu</p>
            </div>
            <button className="btn btn-hoviu"
            onClick={()=>navigate('/hoviu')}
            
            >Explorar
            </button>
          </div>
        </div>
      </div>


      <div className="bottom-section">
        <img src={conocenos} alt="Descripción" className="bottom-image" />
        <div className="bottom-text">
          <h2>Conoce a los R-G-B</h2>
          <p>
            ¡Hola! Somos Kangue, Jaimei y Hoviu, y cada uno de nosotros tiene una forma distinta de ver el mundo.
            Nos encanta compartir nuestras ideas, colores y formas de sentir la vida.
            Kangue es energía pura y siempre va al frente con decisión.
            Jaimei es más tranquilo, prefiere pensar antes de actuar y buscar armonía.
            Hoviu ama lo natural, valora su independencia y siempre va a su ritmo.
            Aunque somos diferentes, juntos formamos un equipo especial. ¿Quieres conocernos mejor?
          </p>
          <button
                      className="btn btn-ini"
                      onClick={() => navigate('/kangue')}
                      >
                      Saber más
            </button> 
        </div>
      </div>

      <div className="bottom-section">
        <img src={sobrenostros} alt="Descripción" className="bottom-image" />
        <div className="bottom-text">
          <h2>Conoce al Equipo de Desarrollo</h2>
          <p>
           ¡Hola! Detrás de Kangue, Jaimei y Hoviu hay un equipo creativo con una visión clara: llevar color, emoción y significado a cada historia.
            Nos une la pasión por contar relatos que conecten con las personas y despierten su imaginación.
            Actualmente estamos trabajando en nuevas aventuras para cada personaje, productos ilustrados y experiencias interactivas que te permitirán explorar más a fondo sus mundos.
            Queremos que tú también seas parte del viaje: pronto lanzaremos contenidos exclusivos, stickers, libros ilustrados y mucho más.
            Este es solo el comienzo. Nuestro equipo está creciendo y los proyectos también. ¿Estás listo para acompañarnos?


          </p>

          <button
                      className="btn btn-ini"
                      onClick={() => navigate('/kangue')}
                      >
                      Saber más
          </button>    
          
        </div>
      </div>


            {/* SECCIÓN DE NOTAS CIRCULARES */}
      <div className="notas-section">
        {notas.map((nota, index) => (
          <div className="nota-card" key={index}>
          <p className="nota-text">{nota.frases[fraseIndices[index]]}</p>
            <img src={nota.imagen} alt={`Nota ${index}`} className="nota-imagen" />
          </div>
        ))}
      </div>


    </>
  )
}

export default Inicio
