import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navBar.jsx'
import CatSays from './pages/catSays.jsx'
import CustomCat from './pages/customCat.jsx'
import Home from './pages/home.jsx'
import TagCat from './pages/tagCat.jsx'
import RandomCat from './pages/randomCat.jsx'
import GifCat from './pages/gifCat.jsx'
import TagSays from './pages/tagSays.jsx'

import { CountProvider } from './countContext.jsx'

function App() {

  return (
    <>
    <CountProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cat-say' element={<CatSays />} />
          <Route path='/cat-tag' element={<TagCat />} />
          <Route path='/custom-cat' element={<CustomCat />} />
          <Route path='/random-cat' element={<RandomCat />} />
          <Route path='/gif-cat' element={<GifCat />} />
          <Route path='/tag-says' element={<TagSays />} />

        </Routes>
      </CountProvider>
      
    </>
  )
}

export default App;
