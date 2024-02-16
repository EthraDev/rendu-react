import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsScreen from "./pages/ProductsScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
import ProductScreen from "./pages/ProductScreen";
import HomeScreen from "./pages/HomeScreen";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppProvider } from "./AppProvider";
import Header from "./components/header";
import CartScreen from "./pages/CartScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/products",
    element: <ProductsScreen />,
  },
  {
    path: "/products/:productId",
    element: <ProductScreen />,
  },
  {
    path: "/cart",
    element: <CartScreen />,
  },
  {
    path: "/products/:productId/comments",
    element: <ProductScreen />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Ajout de l'appProvider => Context central */}
    <AppProvider>
      <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();