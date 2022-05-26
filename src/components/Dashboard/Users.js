import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, error, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                            index={index}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users; 