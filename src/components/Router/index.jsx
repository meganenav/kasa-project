import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../../components/Header/'
import Home from '../../pages/Home/'
import About from '../../pages/About/'
import Accommodation from '../../pages/Accommodation/'
import Error from '../../components/Error/'

//Création du routeur pour lier les différentes routes aux bons composants 
function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/accommodation/:id" element={ <Accommodation /> } />
                <Route path="*" element={ <Error /> } />
            </Routes>
        </Router>
    )
}

export default Routing