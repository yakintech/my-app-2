import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

let initalState = {
    products: [],
    length: 0,
    loading: true,
    error: ''
}


export let fetchProducts = createAsyncThunk("fetch/getProducts", () => {
    return axios.get('https://northwind.vercel.app/api/prodsucts')
        .then(res => res.data)
})



export const productSlice = createSlice({
    name: 'products',
    initialState: initalState,
    reducers: {
        add: (state, action) => {
            state.products.push(action.payload);
            state.length += 1;
        },
        remove: (state, action) => {
            state.products = state.products.filter(q => q.id != action.payload);
            state.length -= 1;
        }
    },
    extraReducers: builder => {

        builder
            .addCase(fetchProducts.pending, (state) => {
                state.products = []
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                console.log('ERROR', action);
                state.loading = false;
                state.products = [];;
                state.error = action.error.message
            })
    }
})




export const AddProductToApi = (data) => {
    return (dispatch) => {

        return axios.post('https://northwind.vercel.app/api/products', data)
            .then(res => {
                dispatch(add(res.data))
            })

    }
}



export const { add, remove } = productSlice.actions;

export default productSlice.reducer