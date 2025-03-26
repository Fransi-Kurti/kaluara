import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ErrorPage from "./pages/ErrorPage";
import BookDetailPage from "./pages/BookDetailPage";
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
          path: '/books',
          element: <BooksPage />
        },
        {
          path: '/books/:bookId',
          element: <BookDetailPage />
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
