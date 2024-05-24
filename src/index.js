import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authors from './authors/Authors';
import Recipes from './recipes/Recipes';
import RecipePage from './single-recipe-page/SingleRecipe';
import ErrorPage from './error-page/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/authors',
    element: <Authors/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/recipes',
    element: <Recipes/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/recipes/:slug',
    element: <RecipePage/>,
    errorElement: <ErrorPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
