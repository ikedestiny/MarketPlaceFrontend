import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
