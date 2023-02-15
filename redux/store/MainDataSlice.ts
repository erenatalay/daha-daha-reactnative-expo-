import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import HttpClient from '../HttpClient';
axios.defaults.baseURL = HttpClient.BASE_URL + "api";

const initialState = {
    loading: false,
}

const slice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        loadingSuccess: (state, action) => {
            state.loading = action.payload
        },
    }
})
const {
    loadingSuccess,
} = slice.actions

const getLoading = (loading: boolean) => (dispatch: any) => {
    dispatch(loadingSuccess(loading))
}



export default {
    getLoading,
    reducer: slice.reducer
}