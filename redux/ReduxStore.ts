import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import promationStore from './store/PromationSlice';
import mainStore from './store/MainDataSlice';
import tagStore from './store/TagDataSlice';

const reducer = combineReducers({
    promationStore : promationStore.reducer,
    mainReducer : mainStore.reducer,
    tagReducer : tagStore.reducer

})

export type ApplicationState=ReturnType<typeof reducer>

const store = configureStore({
    reducer
})

export {store, reducer};