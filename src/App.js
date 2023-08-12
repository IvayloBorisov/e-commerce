import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layouts/Root";
import ProductsListPage from "./pages/ProductListPage";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import UsersListPage from "./pages/UsersListPage";

import { fetchProducts, fetchProductDetails } from "./utils/api";
import WishlistPage from "./pages/WishlistPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'fashion',
        element: <ProductsListPage />,
        loader: () => fetchProducts('fashion')
      },
      {
        path: 'electronics',
        element: <ProductsListPage />,
        loader: () => fetchProducts('electronics')
      },
      {
        path: 'product/:id',
        element: <ProductDetailsPage />,
        loader: ({params}) => fetchProductDetails(params.id),
      },
      {
        path: 'users',
        element: <UsersListPage />,
      },
      {
        path: 'wishlists',
        element: <WishlistPage />
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
