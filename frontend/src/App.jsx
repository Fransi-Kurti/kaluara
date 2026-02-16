import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import ReleasesPage from "./pages/ReleasesPage";
import ErrorPage from "./pages/ErrorPage";
import ReleaseDetailPage from "./pages/ReleaseDetailPage";
import { CartContextProvider } from "./store/CartContext";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        }, 
        {
          path: '/releases',
          element: <ReleasesPage />
        },
        {
          path: '/releases/:releaseId',
          element: <ReleaseDetailPage />
        },

      ]
    },
  ]);
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
