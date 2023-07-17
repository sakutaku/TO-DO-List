import React from 'react';
import axiosApi from "../../axiosApi";
import Messages from "../Messages/Messages";
import {useAppDispatch} from "../../app/hook";
import {fetchMessages} from "../Messages/messagesThunk";
import MessageForm from "../../components/MessageForm/MessageForm";

const Home = () => {
    const dispatch = useAppDispatch();

    const deleteMessage = async (id: string) => {
        if(window.confirm('Do you want to delete task?')) {
            await axiosApi.delete(`/messages/${id}.json`);
            await dispatch(fetchMessages());
        }
    };

    return (
        <div className="container">
            <div className="todo-list">
                <h1>
                    Todo App
                </h1>
                <MessageForm/>
                <Messages
                    deleteMessage={deleteMessage}
                />
            </div>
        </div>
    );
};

export default Home;