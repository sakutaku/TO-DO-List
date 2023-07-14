import {IMessage} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMessages} from "./messagesThunk";

interface DishesState {
    messages: IMessage[];
    fetchLoading: boolean;
}

const initialState: DishesState = {
    messages: [],
    fetchLoading: false,
};



const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.messages = action.payload;
        });
        builder.addCase(fetchMessages.rejected, (state) => {
            state.fetchLoading = false;
        })
    },
});

export const messagesReducer = messagesSlice.reducer;