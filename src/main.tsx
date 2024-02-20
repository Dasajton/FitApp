import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppContext";
import { App } from "./App";
import { Home, Workout, Profile, NotFound } from "./pages";
import "./assets/css/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/workout", element: <Workout /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
