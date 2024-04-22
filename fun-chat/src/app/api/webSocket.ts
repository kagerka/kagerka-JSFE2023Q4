import { CurrentUserInfoType, MessagePayloadType, UserInfoType } from '../data/types';

export const socket = new WebSocket('ws://localhost:4000');

export const createUser = (login: string, password: string): void => {
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

// const getAllActiveUsers = (): void => {
//   socket.onopen = (): void => {
//     socket.send(
//       JSON.stringify({
//         id: crypto.randomUUID(),
//         type: 'USER_ACTIVE',
//         payload: null,
//       }),
//     );
//   };

//   socket.onmessage = (event): void => {
//     const result: UserInfoType[] = [];
//     const { users } = JSON.parse(event.data).payload;
//     if (users) result.push(...users);
//     const timeout = 1000;
//     setTimeout(() => {
//       sessionStorage.setItem('allActiveUsers', JSON.stringify(result));
//     }, timeout);
//   };
// };

// const getAllInactiveUsers = (): void => {
//   socket.onopen = (): void => {
//     socket.send(
//       JSON.stringify({
//         id: crypto.randomUUID(),
//         type: 'USER_INACTIVE',
//         payload: null,
//       }),
//     );
//   };

//   socket.onmessage = (event): void => {
//     const result: UserInfoType[] = [];
//     const { users } = JSON.parse(event.data).payload;
//     if (users) result.push(...users);
//     const timeout = 1000;
//     setTimeout(() => {
//       sessionStorage.setItem('allInactiveUsers', JSON.stringify(result));
//     }, timeout);
//   };
// };

export const getAllUsers = (): void => {
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
  };
  let temp: UserInfoType[] = [];
  socket.onmessage = (event): void => {
    const result: UserInfoType[] = [];
    const { users } = JSON.parse(event.data).payload;
    if (users) {
      result.push(...users);
      temp = [...temp, ...result];
    }
  };
  const timeout = 1000;
  setTimeout(() => {
    sessionStorage.setItem('allAuthorizedUsers', JSON.stringify(temp));
  }, timeout);
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

  const result: MessagePayloadType[] = [];
  socket.onmessage = (event): void => {
    const { message } = JSON.parse(event.data).payload;
    if (message) result.push(...message);
  };

  return result;
};
