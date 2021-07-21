import { combineReducers } from '@reduxjs/toolkit'
import { store } from './store'
import mainSlice from '../features/mainSlice'
export const rootReuducer = combineReducers({
    store: mainSlice,
})

export type RootState = ReturnType<typeof store.getState>
