import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {IApiMessage, IMessage} from "../../types";

export const fetchMessages = createAsyncThunk(
    'dishes/fetch',
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