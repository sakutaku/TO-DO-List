import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {IApiMessage, IMessage} from "../../types";
import {RootState} from "../../app/store";

export const fetchMessages = createAsyncThunk(
    'messages/fetch',
    async () => {
        const messagesResponse = await axiosApi.get<IApiMessage | null>('/messages.json');
        const messagesData = messagesResponse.data;
        let newMessages: IMessage[] = [];

        if(messagesData) {
            newMessages = Object.keys(messagesData).map((key) => {
                return {...messagesData[key], id: key};
            });
        }

        return newMessages;
    }
);

export const fetchPutMessages = createAsyncThunk<string, string, {state: RootState}>(
    'messages/fetchPut',
    async (id, thunkAPI) => {
        const messages = thunkAPI.getState().messages.messages;

        const key = messages.findIndex(message => message.id === id);

        const data = {
            title: messages[key].title,
            status: !messages[key].status,
        };

        await axiosApi.put(`/messages/${id}.json`, data);
        return id;
    }
);

export const fetchPostMessages = createAsyncThunk<void, string, {state: RootState}>(
    'messages/fetchPost',
    async (arg, thunkAPI) => {
        const newMessage = thunkAPI.getState().messages.newMessage;

        const data = {
            title: newMessage,
            status: false,
        };

        await axiosApi.post('/messages.json', data);
    }
)