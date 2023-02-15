import { PromationStore } from './../../interface/PromationStore';
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import HttpClient from "../HttpClient";
import MainDataSlice from "./MainDataSlice";
import { OfferDetail } from '../../interface/OfferDetail';
axios.defaults.baseURL = HttpClient.BASE_URL;
const config = {
  headers: {
    "X-Country-Id": "TR",
    "X-Language-Id": "TR",
  },
};
const initialState: PromationStore = {
  promation: [],
  promationDetail : {} as OfferDetail
};
const slice = createSlice({
  name: "promation",
  initialState,
  reducers: {
    setPromation: (state, action) => {
      state.promation = action.payload;
    },
    setPromationDetail: (state, action) => {
      state.promationDetail = action.payload;
    },
  },
});
const { setPromation, setPromationDetail } = slice.actions;

const getPromation = () => (dispatch: any) => {
  dispatch(MainDataSlice.getLoading(true));
  axios
    .get("promotions/list?Channel=PWA", config)
    .then((response) => {
      dispatch(setPromation(response.data))
    })
    .catch((error) => {
      alert(error.response)
    })
    .finally(() => dispatch(MainDataSlice.getLoading(false)));
};

const getPromationDetail = (id : number) => (dispatch: any) => {
  dispatch(MainDataSlice.getLoading(true));
  axios
    .get(`promotions?Id=${id}`, config)
    .then((response) => {
      dispatch(setPromationDetail(response.data))
    })
    .catch((error) => {
      alert(error.response)
    })
    .finally(() => dispatch(MainDataSlice.getLoading(false)));
};
export default {
  getPromation,
  getPromationDetail,
  reducer: slice.reducer,
};
