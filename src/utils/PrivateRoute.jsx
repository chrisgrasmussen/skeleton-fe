import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react'
import AuthContext from '../context/AuthContext.jsx'
import ConversationsPage from '../pages/ConversationsPage.jsx';


const PrivateRoute = () => {

    let { user } = useContext(AuthContext)
    return user ? <ConversationsPage /> : <Navigate to="/login" />;
}

export default PrivateRoute
