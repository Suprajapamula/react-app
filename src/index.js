import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './app/store'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Countries from './features/countries/Countries';
import Products from './features/countries/Products';
import CountryDetails from './features/countries/CountryDetails';4
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/countries',
        element:<Countries></Countries>,
        children:[
          {
             path:'/countries/countryDetails/:cname',
             element:<CountryDetails></CountryDetails>
          }
        ]
      },
      {
        path:'/products',
        element:<Products></Products>
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
