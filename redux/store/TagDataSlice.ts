import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import HttpClient from "../HttpClient";
import MainDataSlice from "./MainDataSlice";
import { TagStore } from "../../interface/TagStore";
axios.defaults.baseURL = HttpClient.BASE_URL;
const config = {
  headers: {
    "X-Country-Id": "TR",
    "X-Language-Id": "TR",
  },
};

const initialState: TagStore = {
  tags: [],
};
const slice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    setTag: (state: TagStore, action) => {
      state.tags = action.payload;
    },
  },
});
const { setTag } = slice.actions;

const getTags = () => (dispatch: any) => {
  dispatch(MainDataSlice.getLoading(true));
  axios
    .get("tags/list", config)
    .then((response) => {
      dispatch(setTag(response.data));
    })
    .catch((error) => {
     alert(error.response.message);
    })
    .finally(() => dispatch(MainDataSlice.getLoading(false)));
};

export default {
  getTags,
  reducer: slice.reducer,
};
