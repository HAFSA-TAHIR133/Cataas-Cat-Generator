import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CountProvider } from './countContext.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
    <CountProvider>
      
      <App />
    </CountProvider>
  </BrowserRouter>
</StrictMode>
,
  
)
