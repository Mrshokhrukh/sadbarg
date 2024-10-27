import { StrictMode } from "react";
import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LazyLoadingSpin from "./components/ui/LazyLoadingSpin.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "./styles/main.style.css";

const Layout = lazy(() => import("./components/layout/Layout.tsx"));
const NotFound = lazy(() => import("./components/layout/NotFound.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LazyLoadingSpin />}>
            <App />
          </Suspense>
        ),
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
