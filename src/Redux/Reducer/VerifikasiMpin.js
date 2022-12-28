import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Utilities/BaseUrl";

const initialState = {
  data: null,
  fetching: false,
  success: false,
  failed: false,
};

export const ValidasiMpinApi = createAsyncThunk(
  "ValidasiMpin/post",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/oy/validate_mpin", data);
      // console.log(res.data);
      if (res.data.code !== "000") return rejectWithValue(res.data);
      return res.data;
    } catch (error) {
      // console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const ValidasiMpinSlice = createSlice({
  name: "ValidasiMpin",
  initialState,
  reducers: {
    resetValidasiMpin: () => initialState,
  },

  extraReducers: {
    [ValidasiMpinApi.pending]: (state, action) => {
      state.data = null;
      state.fetching = true;
      state.success = false;
      state.failed = false;
    },
    [ValidasiMpinApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.fetching = false;
      state.success = true;
      state.failed = false;
    },
    [ValidasiMpinApi.rejected]: (state, action) => {
      state.data = action.payload;
      state.fetching = false;
      state.success = false;
      state.failed = true;
    },
  },
});

export const { resetValidasiMpin } = ValidasiMpinSlice.actions;

export default ValidasiMpinSlice.reducer;
