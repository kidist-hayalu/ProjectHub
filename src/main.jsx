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
import Homepage from './Homepage/Homepage.jsx'
import Teams from './Teams/Teams.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Homepage />},
  {path: "/Dashboard", element: <Project />},
  {path: "/Login", element: <Login />},
  {path: "/Report", element: <Report />},
  {path: "/Chart", element: <Chart />},
  {path: "/Teams", element: <Teams />},
  {path: "*", element: <NotFound />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

