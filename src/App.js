import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Videos /> },
      {path: "/videos", element: <Videos />},
      { path: "/videos/:keyword", element: <Videos />},
      { path: "/videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

  )

}

export default App;
