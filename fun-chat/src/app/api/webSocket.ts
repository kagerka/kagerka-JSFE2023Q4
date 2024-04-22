import { CurrentUserInfoType, MessagePayloadType, MsgHistoryType, UserInfoType } from '../data/types';

export const socket = new WebSocket('ws://localhost:4000');

export const createUser = (login: string, password: string): void => {
  socket.onopen = (): void => {
    socket.send(
      JSON.stringify({
        id: crypto.randomUUID(),
        type: 'USER_LOGIN',
        payload: {
          user: {
            login,
            password,
          },
        },
      }),
    );
  };
};

export const getAllUsers = (): UserInfoType[] => {
  let temp: UserInfoType[] = [];
  socket.onopen = (): void => {
    socket.send(
      JSON.stringify({
        id: crypto.randomUUID(),
        type: 'USER_ACTIVE',
        payload: null,
      }),
    );
    socket.send(
      JSON.stringify({
        id: crypto.randomUUID(),
        type: 'USER_INACTIVE',
        payload: null,
      }),
    );

    socket.onmessage = (event): void => {
      const result: UserInfoType[] = [];
      const { users } = JSON.parse(event.data).payload;
      if (users) {
        result.push(...users);
        temp = [...temp, ...result];
      }
    };
    const timeout = 100;
    setTimeout(() => {
      sessionStorage.setItem('allAuthorizedUsers', JSON.stringify(temp));
    }, timeout);
  };
  return temp;
};

export const logout = (): void => {
  let currentUser: CurrentUserInfoType;
  if (sessionStorage.getItem('currentUserLogin')) {
    currentUser = JSON.parse(sessionStorage.getItem('currentUserLogin') || '{}');
  }

  socket.onopen = (): void => {
    socket.send(
      JSON.stringify({
        id: crypto.randomUUID(),
        type: 'USER_LOGOUT',
        payload: {
          user: {
            login: currentUser?.login,
            password: currentUser?.password,
          },
        },
      }),
    );
  };
};

export const sendMsg = (login: string, text: string): MessagePayloadType[] => {
  const result: MessagePayloadType[] = [];
  socket.onopen = (): void => {
    socket.send(
      JSON.stringify({
        id: crypto.randomUUID(),
        type: 'MSG_SEND',
        payload: {
          message: {
            to: login,
            text,
          },
        },
      }),
    );

    socket.onmessage = (event): void => {
      const { message } = JSON.parse(event.data).payload;
      if (message) result.push(...message);
    };
  };
  return result;
};

export const getMsgHistory = (login: string): void => {
  let temp: MsgHistoryType[] = [];
  socket.onopen = (): void => {
    socket.send(
      JSON.stringify({
        id: crypto.randomUUID(),
        type: 'MSG_FROM_USER',
        payload: {
          user: {
            login,
          },
        },
      }),
    );

    socket.onmessage = (event): void => {
      const result: MsgHistoryType[] = [];
      const { messages } = JSON.parse(event.data).payload;
      if (messages) {
        result.push(...messages);
        temp = [...temp, ...result];
      }
    };
  };
  const timeout = 1000;
  setTimeout(() => {
    sessionStorage.setItem('currentChatMessages', JSON.stringify(temp));
  }, timeout);
};
