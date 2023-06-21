import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import '@picocss/pico'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowCreators />,
  }, 
  {
    path: "/view/:creatorId",
    element: <ViewCreator />,
  },
  {
    path: "/add",
    element: <AddCreator />,
  },
  {
    path: "/edit/:creatorId",
    element: <EditCreator />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <footer></footer>
  </React.StrictMode>,
)
