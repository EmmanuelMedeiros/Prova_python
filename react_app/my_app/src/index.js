import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { UserProvider } from "./context/UserContext.jsx"
import { NoteProvider } from './context/UserContext.jsx';

import App from './App';
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/Home';
import CreateNote from './components/CreateNote';
import Register from './components/Register';
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
      },
      {
        path: "/create-note",
        element: <CreateNote/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <NoteProvider>
        <RouterProvider router={router}/>
        </NoteProvider>
      </UserProvider>
  </React.StrictMode>

);
