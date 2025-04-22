import React, { useEffect } from 'react'
import BaseLayout from '../pages/BaseLayout';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    // const navigate = useNavigate();
    // const isAuthenticated = localStorage.getItem('isAuthenticated');
    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate('/sign-in')
    //     }
    // }, [navigate, isAuthenticated])

    // if (!isAuthenticated) return null;

    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    );
}

export default ProtectedRoute