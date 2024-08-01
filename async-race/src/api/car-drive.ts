import { BASE_URL, SUCCESS_RESPONSE_CODE } from '../data/constants';
import { DriveModeType, StartEngineType } from '../data/types';

export const startEngine = async (id: number): Promise<StartEngineType> => {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const responseData = await response.json();
  return responseData;
};

export const stopEngine = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  const responseData = await response.json();
  return responseData;
};

export const driveMode = async (id: number): Promise<DriveModeType> => {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  });
  let resStatus: DriveModeType;
  if (response.status === SUCCESS_RESPONSE_CODE) {
    resStatus = { ...(await response.json()) };
  } else {
    resStatus = { success: false };
  }
  return resStatus;
};
