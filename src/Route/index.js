import { createBrowserRouter } from "react-router-dom";
import Mpin from "../Container/Mpin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mpin />,
  },
]);

export default router;
