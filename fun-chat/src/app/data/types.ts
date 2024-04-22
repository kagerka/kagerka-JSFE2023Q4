export type BaseComponentType = {
  tag: keyof HTMLElementTagNameMap;
  styles: string[];
};

export type ButtonType = {
  name: string;
  styles: string[];
};

export type AuthType = {
  id: string;
  type: string;
  payload: CurrentUserType;
};

export type CurrentUserType = {
  user: CurrentUserInfoType;
};

export type CurrentUserInfoType = {
  login: string;
  password: string;
};

export type AllUsersType = {
  id: string;
  type: string;
  payload: UserType;
};

export type UserType = {
  user: UserInfoType;
};

export type UserInfoType = {
  login: string;
  isLogined: boolean;
};

export type MessageResponseType = {
  id: string;
  type: string;
  payload: MessagePayloadType;
};

export type MessagePayloadType = {
  message: {
    id: string;
    from: string;
    to: string;
    text: string;
    datetime: number;
    status: {
      isDelivered: boolean;
      isReaded: boolean;
      isEdited: boolean;
    };
  };
};
