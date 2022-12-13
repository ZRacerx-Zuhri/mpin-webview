import { configureStore } from "@reduxjs/toolkit";

import ValidasiMpin from "./Reducer/VerifikasiMpin";

const Store = configureStore({
  reducer: {
    ValidasiMpin,
  },
});

export default Store;
