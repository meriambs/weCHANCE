import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/JobOffer/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import JobCreateView from  'src/views/CreateJobOffer/JobCreateView';
import GetJobView from 'src/views/GetJobOffer/GetJobView'
import PostulerView from 'src/views/Postuler/PostulerView';
import FrontView from  'src/views/Front/FrontView';
const routes = [
  {
    
    path: 'app',
    
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
       { path: 'Welcome', element: <FrontView /> },
      { path: 'creatJobOffer', element: <JobCreateView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'postuler/:id', element: <PostulerView /> },
      { path: 'JobOffer/:id', element: <GetJobView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
