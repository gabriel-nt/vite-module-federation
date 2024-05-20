import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProductApplication from "product-mfe/App";
import CartApplication from "cart-mfe/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductApplication />,
      },
      {
        path: "cart",
        element: <CartApplication />,
      }
    ],
  },
]);

export default router;
