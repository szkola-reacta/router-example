import React from 'react';
import { useParams } from 'react-router-dom';

function User() {

    let { userid } = useParams();

    return <h2>User, {userid}</h2>;
}

export default User;
