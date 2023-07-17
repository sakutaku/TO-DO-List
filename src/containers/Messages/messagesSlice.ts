import {IMessage} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMessages, fetchPostMessages, fetchPutMessages} from "./messagesThunk";

interface MessagesState {
    messages: IMessage[];
    fetchLoading: boolean;
    id: string;
    newMessage: string;
    checked: boolean;
}

const initialState: MessagesState = {
    messages: [],
    fetchLoading: false,
    id: '',
    newMessage: '',
    checked: false
};



const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        onChange: (state, action) => {
            state.newMessage = action.payload;
        },
        onChecked: (state) => {
            state.checked = !state.checked;
        }
    },
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
        });
        builder.addCase(fetchPutMessages.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchPutMessages.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.id = action.payload;
        });
        builder.addCase(fetchPutMessages.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(fetchPostMessages.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchPostMessages.fulfilled, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(fetchPostMessages.rejected, (state) => {
            state.fetchLoading = false;
        });
    },
});

export const messagesReducer = messagesSlice.reducer;
export const {onChange, onChecked} = messagesSlice.actions;