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
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from "../protected-route/protected-route";
import { getUserData } from "../../services/actions/login";

export default function App() {
  /*const location = useLocation();
  const background = location.state && location.state.background;*/
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredientsData());
    dispatch(getUserData());
  }, [dispatch])

  return (
    <>
      <AppHeader/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<ProtectedRoute anonymous> <Login /> </ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute> <Profile/> </ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ProtectedRoute anonymous><ResetPassword /></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ProtectedRoute anonymous><ForgotPassword /></ProtectedRoute>} />
          <Route path="/ingredients" element={<IngredientDetailsPage />} />
        </Routes>
      </>
  );
} 