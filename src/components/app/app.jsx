import React from "react";
import AppHeader from "../app-header/app-header";
import { getIngredientsData } from "../../services/actions/all-ingredients";
import HomePage from "../../pages/home";
import Profile from '../../pages/profile';
import Login from '../../pages/login';
import Register from '../../pages/register';
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from '../../pages/reset-password'
import IngredientDetailsPage from "../../pages/ingredients";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import { ProvideAuth } from '../../services/auth';

export default function App() {

  const dispatch = useDispatch();
  React.useEffect(() => { dispatch(getIngredientsData()) }, [dispatch]);

  return (
    /*<ProvideAuth>*/
    <BrowserRouter>
    <AppHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/ingredients" element={<IngredientDetailsPage />} />
      </Routes>
    </BrowserRouter>
    /*</ProvideAuth>*/
  );
} 