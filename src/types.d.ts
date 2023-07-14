export interface IMessage {
    id: string;
    title: string;
}

export interface IApiMessage {
    [id: string]: IMessage;
}