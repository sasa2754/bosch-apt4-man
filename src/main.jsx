import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from './App';
import './index.css'
import Api from './Api.jsx'
import Produtos from './Produtos.jsx'
import Mapa from './Mapa.jsx';
import Grafico from './Grafico.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Api",
    element: <Api />,
  },
  {
    path: "/Produtos",
    element: <Produtos />,
  },
  {
    path: "/Mapa",
    element: <Mapa />,
  },
  {
    path: "/Grafico",
    element: <Grafico />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
