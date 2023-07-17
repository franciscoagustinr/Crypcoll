import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className="h-[100%] w-[100%] bg-gradient-to-b from-black to-violet-900 "> */}
    <div className="h-[100%] w-[100%] bg-gradient-to-br from-gray-700 via-gray-900 to-black">
    
      <App />
    </div>
  </React.StrictMode>,
)
