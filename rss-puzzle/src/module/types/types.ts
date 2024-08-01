export type GameData = {
  level: number;
  round: number;
  sentenceNumber: number;
  roundsCount: number;
};

export type Words = {
  textExample: string;
  textExampleTranslate: string;
  audioExample: string;
};

export type ButtonData = {
  buttonName: string;
  type: string;
  className: string;
  id: string;
};

export type ModalData = {
  text: string;
  yesBtnData: {
    buttonName: string;
    type: string;
    className: string;
    id: string;
  };
  noBtnData: {
    buttonName: string;
    type: string;
    className: string;
    id: string;
  };
};

export type InputData = {
  placeholder: string;
  type: string;
  className: string;
  id: string;
  name: string;
  required: string;
};

export type StorageTypes = {
  currentSentenceWrapper: HTMLElement;
  logoutButton: HTMLButtonElement;
};
