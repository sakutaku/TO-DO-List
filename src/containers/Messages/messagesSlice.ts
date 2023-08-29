import {IMessage} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {deleteMessage, fetchMessages, fetchPostMessages, fetchPutMessages} from "./messagesThunk";

interface MessagesState {
    messages: IMessage[];
    fetchLoading: boolean;
    createLoading: boolean;
    putLoading: boolean;
    deleteLoading: boolean;
    id: string;
    newMessage: string;
    checked: boolean;
}

const initialState: MessagesState = {
    messages: [],
    fetchLoading: false,
    createLoading: false,
    putLoading: false,
    deleteLoading: false,
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
            state.putLoading = true;
        });
        builder.addCase(fetchPutMessages.fulfilled, (state, action) => {
            state.putLoading = false;
            state.id = action.payload;
        });
        builder.addCase(fetchPutMessages.rejected, (state) => {
            state.putLoading = false;
        });
        builder.addCase(fetchPostMessages.pending, (state) => {
            state.createLoading = true;
        });
        builder.addCase(fetchPostMessages.fulfilled, (state) => {
            state.createLoading = false;
        });
        builder.addCase(fetchPostMessages.rejected, (state) => {
            state.createLoading = false;
        });
        builder.addCase(deleteMessage.pending, (state) => {
            state.deleteLoading = true;
        });
        builder.addCase(deleteMessage.fulfilled, (state) => {
            state.deleteLoading = false;
        });
        builder.addCase(deleteMessage.rejected, (state) => {
            state.deleteLoading = false;
        });
    },
});

export const messagesReducer = messagesSlice.reducer;
export const {onChange, onChecked} = messagesSlice.actions;
