import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CandidatesListView from 'src/views/customer/CandidatesListView';
 //import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/JobOffer/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import JobCreateView from  'src/views/CreateJobOffer/JobCreateView';
import GetJobView from 'src/views/GetJobOffer/GetJobView'
import PostulerView from 'src/views/Postuler/PostulerView';
 import FrontView from  'src/views/Front/FrontView';
 import AcceuilView from 'src/views/Acceuil/AcceuilView';
import ProfilUpdateView from 'src/views/ProfilUpdate/ProfilUpdateView';
import PhotoUpdtedView from 'src/views/PhotoUpdted/PhotoUpdtedView'
const routes = [
  {
    
    path: 'app',
    
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
       {path: 'Acceuil' ,element:<AcceuilView/>},
       {path:'Photo',element:<PhotoUpdtedView/>},
      // { path: 'CandidatesList', element: <CandidatesListListView /> },
      { path: 'creatJobOffer', element: <JobCreateView /> },
       //{ path: 'Welcome', element: <FrontView /> },
      { path: 'Candidates/:id', element: <CandidatesListView /> },
       { path: 'update-profil', element: <ProfilUpdateView /> },
      { path: 'Job-offer', element: <ProductListView /> },
      { path: 'postuler/:id', element: <PostulerView /> },
      { path: 'JobOffer/:id', element: <GetJobView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  //  {
    
  //   path: 'app',
  //   element:<TopBar/>,
  //   // element: <DashboardLayout />,
  //   children: [
  //     // { path: 'account', element: <AccountView /> },
       
  //     // // { path: 'CandidatesList', element: <CandidatesListListView /> },
  //     // { path: 'creatJobOffer', element: <JobCreateView /> },
  //     //  //{ path: 'Welcome', element: <FrontView /> },
  //     // { path: 'Candidates', element: <CandidatesListView /> },
  //     // // { path: 'dashboard', element: <DashboardView /> },
  //     { path: 'Job-offer', element: <ProductListView /> },
  //     // { path: 'postuler/:id', element: <PostulerView /> },
  //     // { path: 'JobOffer/:id', element: <GetJobView /> },
  //     // { path: 'settings', element: <SettingsView /> },
  //     { path: '*', element: <Navigate to="/404" /> }
  //   ]
  // },
  
  {
    path: '/',
    
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
       { path: 'Welcome', element: <FrontView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/Welcome" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
