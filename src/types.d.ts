export interface IMessage {
    id: string;
    title: string;
    status: boolean;
}

export interface IApiMessage {
    [id: string]: IMessage;
}

export type TApiMessage = Omit<IMessage, 'id'>;

export interface IMessageMutation {
    title: string;
    status: boolean;
}