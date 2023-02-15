import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Coxsbazar from "../components/Places/Coxsbazar";
import Sremangal from "../components/Places/Sremangal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/coxsbazar",
        element: <Coxsbazar></Coxsbazar>,
      },
      {
        path: "/sremangal",
        element: <Sremangal></Sremangal>,
      },
    ],
  },
]);
export default router;
