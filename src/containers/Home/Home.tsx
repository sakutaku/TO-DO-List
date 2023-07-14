import React from 'react';
import Messages from "../Messages/Messages";

const Home = () => {
    const deleteMessage = () => {
        console.log('deleted');
    }
    return (
        <div className="container">
            <div className="todo-list">
                <h1>Todo App</h1>
                <Messages deleteMessage={deleteMessage}/>
            </div>
        </div>
    );
};

export default Home;