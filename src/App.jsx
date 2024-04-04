import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout'
import Home from './pages/Home'
import './App.css'
import Footer from './components/Footer'
import Router from './Router/Router'


const App = () => {
  return (
    <>
      <Layout/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App