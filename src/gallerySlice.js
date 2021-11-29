import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  return await axios
    .get("https://picsum.photos/v2/list?page=2&limit=9")
    .catch((err) => {
      console.log(err.code);
    });
});

const initialState = {
  photos: [],
  isLoading: false,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = false;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = gallerySlice.actions;
export default gallerySlice.reducer;
