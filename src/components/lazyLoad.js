import { lazy, Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { BoxCenter } from './BoxCenter.styles';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);
const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */)
);

export function HomePageLazy() {
  return (
    <Suspense
      fallback={
        <BoxCenter>
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </BoxCenter>
      }
    >
      <HomePage />
    </Suspense>
  );
}

export function MoviesPageLazy() {
  return (
    <Suspense
      fallback={
        <BoxCenter>
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </BoxCenter>
      }
    >
      <MoviesPage />
    </Suspense>
  );
}
export function MovieDetailsPageLazy({ children }) {
  return (
    <Suspense
      fallback={
        <BoxCenter>
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </BoxCenter>
      }
    >
      <MovieDetailsPage children={children} />
    </Suspense>
  );
}

export function CastLazy() {
  return (
    <Suspense
      fallback={
        <BoxCenter>
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </BoxCenter>
      }
    >
      <Cast />
    </Suspense>
  );
}
export function ReviewsLazy() {
  return (
    <Suspense
      fallback={
        <BoxCenter>
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </BoxCenter>
      }
    >
      <Reviews />
    </Suspense>
  );
}
