import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './Loader/Loader';
import Layout from 'layouts/Layout';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import ErrorPage from 'pages/ErrorPage';

const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
