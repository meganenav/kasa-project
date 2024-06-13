import React from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './components/Router/'
import Footer from './components/Footer/'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Routing />
    <Footer />
  </React.StrictMode>
)