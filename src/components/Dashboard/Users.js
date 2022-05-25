import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, error } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div>
            <h3>all Users: {users.length}</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRow
                            key={user._id}
                            user={user}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users; 