import { lazy, Suspense } from "react"
import Navigation from "./components/Navigation/Navigation.jsx"
import "./App.css"
import { Route, Routes } from "react-router-dom"

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"))
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"))
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast.jsx"))
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews.jsx"))

const App = () => {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App