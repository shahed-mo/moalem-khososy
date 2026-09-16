import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Subjects from './pages/Subjects/Subjects'
import Reviews from "./pages/Reviews/Reviews"
import Contact from './pages/Contact/Contact'
import NotFound from './Components/NotFound'
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App