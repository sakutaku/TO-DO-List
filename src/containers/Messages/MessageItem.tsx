import React from 'react';
import {IMessage} from "../../types";

interface Props {
    message: IMessage;
    onDelete: React.MouseEventHandler;
}
const MessageItem: React.FC<Props> = ({message, onDelete}) => {
    return (
        <div className="list-item">
            <div>
                <label htmlFor={message.id} className="label">{message.title}</label>
                <input type="checkbox" id={message.id} className="input"/>
            </div>
            <div>
                <button onClick={onDelete} className="btn-delete">X</button>
            </div>
        </div>
    );
};

export default MessageItem;