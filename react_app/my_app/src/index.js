import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './components/Home';
import Register from './components/Register';

import App from './App';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import ListScreen from './components/ListScreen';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      
      {
        path:"/register",
        element: <Register/>
      },
      {
        path:"/todo-list",
        element: <ListScreen/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
