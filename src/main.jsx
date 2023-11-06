import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Routers/myCreatedRouter'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider> 
      <RouterProvider router={myCreatedRouter} ></RouterProvider>
      </AuthProvider>
  </React.StrictMode>,
)
