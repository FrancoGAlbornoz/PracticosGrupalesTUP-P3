import React from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
import { useState } from 'react'
import { LengProgramacion } from '../data/config'


const Home = () => {
    
    const [datos,setDatos] = useState(LengProgramacion)

  return (
    <div>
        <Header/>
        <MainHome datos={datos}/>
        <Footer/>
    </div>
  )
}

export default Home