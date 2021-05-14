import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';

import axios from 'axios';

const UserState = (props) => {

    const initialState = {
        users: [],
        selectedUser: null
    }

    // el UserReducer es similar al useState solo que este recibe un dispatch el cual permiter elegir que estado compartir
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {

        const res = await axios.get('https://reqres.in/api/users');
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        });

    }

    const getProfile = async (id) => {

        const res = await axios.get('https://reqres.in/api/users/' + id);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        });

    }

    return (

        // todos los componentes que esten dentor de UserContex.Provider van a poder acceder al estado initialState
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState;