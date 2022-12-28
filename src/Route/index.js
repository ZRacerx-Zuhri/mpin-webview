import { createBrowserRouter } from "react-router-dom";
import Failed from "../Container/Failed/Index";
import Mpin from "../Container/Mpin";
import Success from "../Container/Success";

const router = createBrowserRouter([
  {
    path: "/:no_rek/:no_hp/:bpr_id/:amount/:trx_code/:tgl_trans/:rrn",

    element: <Mpin />,
  },
  {
    path: "success/:token",
    element: <Success />,
  },
  {
    path: "/failed",
    element: <Failed />,
  },
]);

export default router;
