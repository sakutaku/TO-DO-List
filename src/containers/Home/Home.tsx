import React from 'react';
import Messages from "../Messages/Messages";
import {useAppDispatch} from "../../app/hook";
import axiosApi from "../../axiosApi";
import {fetchMessages} from "../Messages/messagesThunk";

const Home = () => {
    const dispatch = useAppDispatch();


    const deleteMessage = async (id: string) => {
        if(window.confirm('Do you want to delete task?')) {
            await axiosApi.delete(`/messages/${id}.json`);
            await dispatch(fetchMessages());
        }
    };

    return (
        <div
            className="container"
        >
            <div
                className="todo-list"
            >
                <h1>
                    Todo App
                </h1>
                <Messages
                    deleteMessage={deleteMessage}
                />
            </div>
        </div>
    );
};

export default Home;