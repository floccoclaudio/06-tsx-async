import { combineReducers } from '@reduxjs/toolkit'
import { store } from './store'
import mainSlice from '../features/mainSlice'
import sroSlice from '../features/sroSlice'
import syncReducer from '../features/provaSyncReducer'
export const rootReuducer = combineReducers({
    sro: sroSlice,
    store: mainSlice,
    syncReducer: syncReducer
})

export type RootState = ReturnType<typeof store.getState>
