import {IMessage} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMessages, fetchPutMessages} from "./messagesThunk";

interface MessagesState {
    messages: IMessage[];
    fetchLoading: boolean;
    id: string
}

const initialState: MessagesState = {
    messages: [],
    fetchLoading: false,
    id: '',
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
        builder.addCase(fetchPutMessages.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchPutMessages.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.id = action.payload;
        })
    },
});

export const messagesReducer = messagesSlice.reducer;