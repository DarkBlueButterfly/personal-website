import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
    errorElement: <ErrorPage />,
  },
];

export default routes;
