import React, {useEffect} from 'react';
import {useAppDispatch} from "../../app/hook";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import Spinner from "../../components/SpinnerSpinner/Spinner";
import {IMessage} from "../../types";
import MessageItem from "./MessageItem";
import {fetchMessages} from "./messagesThunk";


interface Props {
    deleteMessage: (id: string) => void;
}
const Messages: React.FC<Props> = ({deleteMessage}) => {
    const dispatch = useAppDispatch();
    const items = useSelector((state: RootState) => state.messages.messages);
    const messagesLoading = useSelector((state: RootState) => state.messages.fetchLoading);

    let messages: React.ReactNode = <Spinner/>;

    if(!messagesLoading) {
        messages = items.map((item: IMessage) => (
            <MessageItem
                key={item.id}
                message={item}
                status={item.status}
                onDelete={() => deleteMessage(item.id)}
            />
        ));
    }

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return (
        <div
            className="list"
        >
            {messages}
        </div>
    );
};

export default Messages;