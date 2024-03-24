import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppliedJobs from './components/main/applied-jobs/AppliedJobs.jsx'
import ErrorPage from './components/main/error-page/ErrorPage.jsx'
import Home from './components/main/home/Home.jsx'
import JobDetails from './components/main/job-details/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
        loader: () => fetch('/data/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
