import React, { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { authRefresh } from '../redux/auth/operations';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authRefresh());
  }, [dispatch]);
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <Register />
              </RestrictedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <Login />
              </RestrictedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
