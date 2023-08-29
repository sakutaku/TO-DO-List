import React from 'react';
import Messages from "../Messages/Messages";
import {useAppDispatch} from "../../app/hook";
import {deleteMessage, fetchMessages} from "../Messages/messagesThunk";
import MessageForm from "../../components/MessageForm/MessageForm";

const Home = () => {
    const dispatch = useAppDispatch();

    const onDeleteMessage = async (id: string) => {
        if(window.confirm('Do you want to delete task?')) {
            await dispatch(deleteMessage(id));
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
                    deleteMessage={onDeleteMessage}
                />
            </div>
        </div>
    );
};

export default Home;