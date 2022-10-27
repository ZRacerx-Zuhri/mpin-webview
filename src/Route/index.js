import { createBrowserRouter } from "react-router-dom";
import Mpin from "../Container/Mpin";

const router = createBrowserRouter([
  {
    path: "/:no_rek/:no_hp/:bpr_id/:reff/:amount/:tgl_trans",
    element: <Mpin />,
  },
]);

export default router;
