import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Html from './pages/html.jsx'
import Css from './pages/css.jsx'
import Javascript from './pages/javascript.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<h1 style={{color:"red"}}>Sorry</h1>
  },
  {
    path: "/html",
    element: <Html/>,
    errorElement:<h1 style={{color:"red"}}>Sorry</h1>
  },
  {
    path: "/css",
    element: <Css/>,
    errorElement:<h1 style={{color:"red"}}>Sorry</h1>
  },
  {
    path: "/javascript",
    element: <Javascript/>,
    errorElement:<h1 style={{color:"red"}}>Sorry</h1>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />
  </StrictMode>,
)
