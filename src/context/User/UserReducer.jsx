import { GET_USERS, GET_PROFILE } from '../types';

// recibe el estado actual y una accion como quiero que se actualice el estado 
export default (state, action) => {
    // payload son los datos que se estan pasando 
    const { payload, type } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }
        default:
            return state;
    }
}