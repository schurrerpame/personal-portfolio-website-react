import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Home, Blog, AboutMe, Nopage, Job } from './pages';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import ReactGA from "react-ga4";

ReactGA.initialize("G-GBXHRE3MFJ");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Nopage />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },

  {
    path: "/job/:id",
    element: <Job />,
  }
]);



ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <RouterProvider router={router} />
  </I18nextProvider>,
  document.getElementById('root')
);