import { createSlice } from '@reduxjs/toolkit'


interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface MainInitialStateType {
    inventory: ProductType[],
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
}
const initialMainState: MainInitialStateType = {
    inventory: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
}


export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: initialMainState,
    reducers: {
    }
})

export default mainSlice.reducer