import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from "../../constants/firebase";

export const fetchWords = createAsyncThunk(
    'words/fetchWords',
    async () => {
        try {
            const response = await fetch(`${URL_BASE_FIREBASE_REALTIME_DATABASE}/words.json`)
            if(!response.ok) {
                throw new Error('Fallo')
            }
            const data = await response.json()
            return data
        }   catch (error) {
            throw new Error('Error:', error)
        }  
    }
)

const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWords.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchWords.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(fetchWords.rejected, (state) => {
                state.loading = false
            })
    }
})

export default wordsSlice.reducer