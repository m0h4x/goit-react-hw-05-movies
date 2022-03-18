import { Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/Header';
// import Cast from './components/Cast';
// import Reviews from './components/Reviews';
import {
  HomePageLazy,
  MoviesPageLazy,
  MovieDetailsPageLazy,
  CastLazy,
  ReviewsLazy,
} from 'components/lazyLoad';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePageLazy />} />
          <Route path="/movies" element={<MoviesPageLazy />} />
          <Route path="movies/:postId" element={<Outlet />}>
            <Route index element={<MovieDetailsPageLazy />} />
            <Route
              path="cast"
              element={
                <MovieDetailsPageLazy>
                  <CastLazy />
                </MovieDetailsPageLazy>
              }
            />
            <Route
              path="reviews"
              element={
                <MovieDetailsPageLazy>
                  <ReviewsLazy />
                </MovieDetailsPageLazy>
              }
            />
          </Route>
          <Route path="*" element={<HomePageLazy />} />
        </Route>
      </Routes>
    </>
  );
};
