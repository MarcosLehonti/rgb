import { Routes, Route } from 'react-router-dom'
import Kangue from './kangue'
import Inicio from './inicio'
import Jaimei from './jaimei'
import Hoviu from './Hoviu'
import Sopesar1 from './sopesar1'
import ConoceaJaimei from './conoceajaimei'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/kangue" element={<Kangue />} />
      <Route path="/jaimei" element={<Jaimei />} />
      <Route path="/hoviu" element={<Hoviu />} />
      <Route path="/sopesarvol1" element={<Sopesar1 />} />
      <Route path="/conoce-rgb" element={<ConoceaJaimei />} />




      
    </Routes>
  )
}
