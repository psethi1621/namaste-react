import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error'
import RestaurantMenu from "./components/RestaurantMenu";
// import LazyLoading from "./components/LazyLoading";
/**
 * Chunking 
 * Lazy loading
 * Dynamic bundling
 * Code spliting
 */

const LazyLoading = lazy(() => import('./components/LazyLoading'));

const AppLayout = () => {


  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/lazyloading",
        element: <LazyLoading />,
      }
    ],
    errorElement: <Error />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
