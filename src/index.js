import React from 'react'
import { createRoot } from 'react-dom/client';
import Routing from './components/Router/'
import Header from './components/Header/'
import Footer from './components/Footer/'

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Header />
    <Routing />
    <Footer />
  </React.StrictMode>
)