import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MobileProvider } from './context/MobileContext.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <MobileProvider>
      <App/>
    </MobileProvider>
  </BrowserRouter>
  
)
