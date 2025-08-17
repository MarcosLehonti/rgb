import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Kangue from './kangue'
import Inicio from './inicio'
import Jaimei from './jaimei'
import Hoviu from './Hoviu'
import Sopesar1 from './sopesar1'
import ConoceaJaimei from './conoceajaimei'
import Fragmentos_Express_Hoviu from './Fragmentos_Express_Hoviu'
import GeminiView from './GeminiView'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
      
      <Route path="/" element={<Inicio />} />
      <Route path="/kangue" element={<Kangue />} />
      <Route path="/jaimei" element={<Jaimei />} />
      <Route path="/hoviu" element={<Hoviu />} />
      <Route path="/sopesarvol1" element={<Sopesar1 />} />
      <Route path="/fragmentosexpresshoviu" element={<Fragmentos_Express_Hoviu />} />

      <Route path="/conoce-rgb" element={<ConoceaJaimei />} />
      <Route path="/hoviu-responde" element={<GeminiView />} />

     </Routes>

      
    </Router>
  )
}
