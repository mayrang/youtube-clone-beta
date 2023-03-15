import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SearchList from "./pages/SearchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/searchList/:searchData", element: <SearchList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
