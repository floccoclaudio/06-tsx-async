import { combineReducers } from '@reduxjs/toolkit'
import { store } from './store'
import mainSlice from '../features/mainSlice'
import sroSlice from '../features/sroSlice'
export const rootReuducer = combineReducers({
    sro: sroSlice,
    store: mainSlice,
})

export type RootState = ReturnType<typeof store.getState>
