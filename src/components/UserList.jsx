import React, { useEffect, useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {

    const { users, getUsers, getProfile } = useContext(UserContext);

    useEffect(() => {

        getUsers();

    }, [])

    return (

        <div className="list-group h-100">

            {
                users.map(user => (
                    <a
                        className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
                        href="#!"
                        key={user.id}
                        onClick={() => getProfile(user.id)}
                    >
                        <img
                            className="img-fluid mr-4 rounded-circle"
                            width="70"
                            src={user.avatar}
                        />
                        <p>
                            {`${user.first_name} ${user.last_name}`}
                        </p>

                    </a>
                ))
            }

        </div>

    );
}

export default UserList;