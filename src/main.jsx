import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Travel from './components/travel/travel'
import Featured from './components/featured/featured'
import Most from './components/most/most'
import Footer from './components/footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className='backImage'>
        <Header/>
        <Hero/>
      </div>
      <Travel/>
      <div className='backColor'>
        <Featured/>  
        <Most/>
      </div>
      <div className='backround'>
        <Footer/>
      </div>
    </>
  </StrictMode>
)
