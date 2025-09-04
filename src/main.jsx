import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import './index.css'
import App from './App.jsx'
import SignIn from './SignIn/SignIn.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Project from './Project/Project.jsx'
import NotFound from './NotFound.jsx'
import Report from './Report/Report.jsx'
import Chart from "./Report/Chart.jsx"
import Login from './SignIn/Login.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Project />},
  {path: "/Login", element: <Login />},
  {path: "/SignIn", element: <SignIn />},
  {path: "/Report", element: <Report />},
  {path: "/Chart", element: <Chart />},
  {path: "*", element: <NotFound />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

