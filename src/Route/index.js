import { createBrowserRouter } from "react-router-dom";
import Failed from "../Container/Failed/Index";
import Mpin from "../Container/Mpin";
import Success from "../Container/Success";

const router = createBrowserRouter([
  {
    path: "/:no_rek/:no_hp/:bpr_id/:rrn/:amount/:tgl_trans",
    element: <Mpin />,
  },
  {
    path: "/:token",
    element: <Success />,
  },
  {
    path: "/failed",
    element: <Failed />,
  },
]);

export default router;
