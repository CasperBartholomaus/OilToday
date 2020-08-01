import { SAVE_TOKEN, DELETE_TOKEN} from './types';

export const saveToken = (token) => ({ type: SAVE_TOKEN, data: token });
export const deleteToken = () => ({ type: DELETE_TOKEN});

