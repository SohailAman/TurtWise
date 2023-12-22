import {lazy, Suspense} from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {FadeLoader} from 'react-spinners';
import MainLayout from '../_root/MainLayout';
import AuthLayout from '../_auth/AuthLayout';
import Signin from '../_auth/forms/Signin';
import Signup from '../_auth/forms/Signup';

const Dashboard = lazy(() => import('../_root/pages/Dashboard'));


const LoadingFallback: React.FC = () => (
    <div className="flex justify-center items-center w-full h-[60dvh]">
      <FadeLoader color="#000" />
    </div>
  );

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: (
                <Suspense fallback={<LoadingFallback />}>
                    <Dashboard />
                </Suspense>
                ),
            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/sing-in',
                element: <Signin />
            },
            {
                path: '/sing-up',
                element: <Signup />
            },
        ]
    },
    
])


export default router