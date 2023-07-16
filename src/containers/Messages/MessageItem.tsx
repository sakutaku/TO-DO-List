import React from 'react';
import {IMessage} from "../../types";
import {useAppDispatch} from "../../app/hook";
import {fetchMessages, fetchPutMessages} from "./messagesThunk";

interface Props {
    message: IMessage;
    onDelete: React.MouseEventHandler;
    status: boolean;
}
const MessageItem: React.FC<Props> = ({message, onDelete, status}) => {
    const dispatch = useAppDispatch();

    const changeStatus = async (id: string) => {
        await dispatch(fetchPutMessages(id));
        await dispatch(fetchMessages());
    };

    return (
        <div className="list-item">
            <div>
                <label
                    htmlFor={message.id}
                    className="label">
                    {message.title}
                </label>
                <input
                    type="checkbox"
                    id={message.id}
                    className="input"
                    checked={status}
                    onChange={() => changeStatus(message.id)}

                />
            </div>
            <div>
                <button
                    onClick={onDelete}
                    className="btn-delete"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default MessageItem;