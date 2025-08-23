import { useState, useEffect } from 'react';
import hoviuAbierto from './assets/Hoviuia.png'; // ojos abiertos
import hoviuCerrado from './assets/Hoviuia1.png'; // ojos cerrados
import './Styles/GeminiView.css'; // Importamos los estilos
import Navbar from './Navbar';

function GeminiView() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isBlinking, setIsBlinking]= useState(false);

  const API_KEY = 'AIzaSyANg5Z4KSMiD8x7isvfWYnN1fg6Y2d3TY4';
  const MODEL = 'gemini-2.0-flash';

 const CONTEXTO_PREDETERMINADO = `
Eres Hoviu, uno de los personajes del grupo R-G-B. Responderás siempre desde tu perspectiva a loq ue te pregunte el usuario con animo y con algo de sarcasmo.

Conoce la información de tus amigos y de ti mismo:

- Hoviu:
  - Nació el 7 de agosto en Santa Cruz, Bolivia.
  - Color favorito: verde.
  - Es auxiliar de una de las materias de su facultad.
  - Le gustan los videojuegos, leer libros y cocinar.
  - Fan de Devil May Cry y Resident Evil.
  - Líder nato, a veces le da miedo fallar.
  - Es algo arrogante y listo.
  - Su persoanje favorito de los videojuegos es Leon S. Kennedy de Resident Evil 4 
  - Estudia Ciencias de la COmputacion 
  - Le gusta el dinseño de Dante de devil may cry y sobre todo de la serie de netflix
  - Canción favorita : Sing me to sleep  de Alan Walker
  - Participo en varios comics como : Fragmentos express de hoviu (el dice que le encanto
    participar en ese comic , sobre todo por que evoca nostalgia y el poder sobrellevar 
    los problemas de la vida), el comic esta inspirado en el Filme "Chungking Express"
    


- Kangue:
  - Nació el 21 de julio en Santa Cruz de la Sierra, Bolivia.
  - Color favorito: rojo.
  - Médico forense de profesión.
  - Personalidad protectora, le gusta cuidar de sus seres queridos.
  - Le encanta ver series de misterios y las flores.
  - 

- Jaimei:
  - Nació el 16 de marzo en Santa Cruz de la Sierra, Bolivia.
  - Color favorito: azul.
  - Tiene 24 años y está estudiando biología, en sus últimos semestres.
  - Persona confiable y siempre dispuesto a estudiar.
  - Le gusta leer comics y manga, es fan del anime.
  - Le gusta el arte y la ciencia.
  - Canción favorita : Golden de Huntrix

Reglas importantes:
1. Si te preguntan sobre ti, Kangue o Jaimei, responde usando **la información que te he dado**.
2. Si te preguntan algo sobre alguno de ustedes y **no está en los datos**, responde exactamente: "tendrías que preguntarle a él porque ni idea".
3. Para cualquier otra pregunta de ciencia, matemáticas, física, química, programación o vida cotidiana, responde de forma clara y fácil de entender.
4. Mantén el tono amigable y coherente con tu personalidad (Hoviu).

Ahora responde a la siguiente consulta del usuario:
`;


  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // dura 200ms el parpadeo
    }, 4000); // parpadea cada 4 segundos

    return () => clearInterval(blinkInterval);
  }, []);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': API_KEY
          },
          body: JSON.stringify({
            contents: [
              { parts: [{ text: CONTEXTO_PREDETERMINADO + prompt }] }
            ]
          })
        }
      );

      const data = await res.json();
      setResponse(data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No se obtuvo respuesta.');
    } catch (error) {
      console.error(error);
      setResponse('Error al comunicarse con la API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
    <Navbar/>
    <div className="gemini-container">
      <h2 className="gemini-title"></h2>

       <div className="gemini-image-container">
          <img
            src={isBlinking ? hoviuCerrado : hoviuAbierto}
            alt="Hoviu"
            className="gemini-image"
          />
        </div>

        {response && (
          <div className="gemini-response">
            {response}
          </div>
        )}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Escribe tu pregunta sobre ciencia o dudas cotidianas..."
        rows={5}
        className="gemini-textarea"
      />

      <div className="gemini-button-container">
        <button
          onClick={handleSend}
          disabled={loading}
          className="gemini-button"
        >
          {loading ? 'Cargando...' : 'Enviar'}
        </button>
      </div>

     
    </div>
     </>
  );
 
}

export default GeminiView;  