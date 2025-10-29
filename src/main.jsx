import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Project from './Project/Project.jsx'
import NotFound from './NotFound.jsx'
import Report from './Report/Report.jsx'
import Chart from "./Report/Chart.jsx"
import Login from './SignIn/Login.jsx'
import Homepage from './Homepage/Homepage.jsx'
import Teams from './Teams/Teams.jsx'

import MotionWrapper from './MotionWrapper.jsx'

const router = createBrowserRouter([
  {path: "/", element: <MotionWrapper><Homepage /></MotionWrapper>},
  {path: "/Dashboard", element: <MotionWrapper><Project /></MotionWrapper>},
  {path: "/Login", element: <MotionWrapper><Login /></MotionWrapper>},
  {path: "/Report", element: <MotionWrapper><Report /></MotionWrapper>},
  {path: "/Chart", element: <MotionWrapper><Chart /></MotionWrapper>},
  {path: "/Teams", element: <MotionWrapper><Teams /></MotionWrapper>},
  {path: "*", element: <NotFound />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

