import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {useAppDispatch} from "../../app/hook";
import {onChange} from "../../containers/Messages/messagesSlice";
import {fetchMessages, fetchPostMessages} from "../../containers/Messages/messagesThunk";

const MessageForm = () => {
    const dispatch = useAppDispatch();
    const inputValue = useSelector((state: RootState) => state.messages.newMessage);

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(inputValue !== ''){
            await dispatch(fetchPostMessages(inputValue));
            await dispatch(fetchMessages());
            await dispatch(onChange(''));
        } else {
         alert('Write a task!');
        }
    };

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onChange(e.target.value));
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <div className="input-wrap">
                <input
                    type="text"
                    className="form-input"
                    name="name"
                    id="name"
                    value={inputValue}
                    onChange={(e) => onFormChange(e)}
                />
            </div>
            <div>
                <button type="submit" className="form-btn">Add Task</button>
            </div>
        </form>
    );
};

export default MessageForm;