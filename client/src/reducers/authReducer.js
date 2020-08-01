import { SAVE_TOKEN, DELETE_TOKEN } from './../actions/types';

const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_TOKEN:
            return {...state, token: action.data };
        case DELETE_TOKEN:
            return {...state, token: null};
        default:
            return state;
    }
};

export default authReducer;