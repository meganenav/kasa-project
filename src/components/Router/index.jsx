import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/'
import About from '../../pages/About/'
import Accommodation from '../../pages/Accommodation/'
import Error from '../../components/Error/'

function Routing() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Routing