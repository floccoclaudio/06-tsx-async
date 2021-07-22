import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

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

export const fetchInventory = createAsyncThunk<ProductType[], void, { state: RootState }>(
    'fetchItems', async () => {
        try {
            let response = await fetch('https://fakestoreapi.com/products')
            return response.json()
        } catch (err) {
            return err as string
        }
    }
)


export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: initialMainState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchInventory.pending, state => { state.isLoading = true })
            .addCase(fetchInventory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.inventory = action.payload;
            }).addCase(fetchInventory.rejected, state => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default mainSlice.reducer