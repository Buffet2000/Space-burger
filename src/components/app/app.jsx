import React from "react";
import AppHeader from "../app-header/app-header";
import { getIngredientsData } from "../../services/actions/all-ingredients";
import HomePage from "../../pages/home";
import Profile from '../../pages/profile';
import Login from '../../pages/login';
import Register from '../../pages/register';
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from '../../pages/reset-password'
import IngredientDetailsPage from "../../pages/ingredient";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from "../protected-route/protected-route";
import { getUserData } from "../../services/actions/login";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const itemsLoaded = useSelector((store) => store.ingredients.items);
  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredientsData());
    dispatch(getUserData());
  }, [dispatch])

  function closePopup() {
    navigate(-1)
  };
  return (
    <>
      <AppHeader/>
      {!itemsLoaded && userData
        ? <p>Загрузка</p>
        : 
        <Routes location={background || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<ProtectedRoute anonymous> <Login /> </ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute> <Profile/> </ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ProtectedRoute anonymous><ResetPassword /></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ProtectedRoute anonymous><ForgotPassword /></ProtectedRoute>} />
          <Route path="/ingredients/:id" element={<IngredientDetailsPage data={itemsLoaded}/>} />
        </Routes>
      }
      
      {background && itemsLoaded && <Routes> <Route path="/ingredients/:id" element={<Modal handleClose={closePopup}><IngredientDetails data={itemsLoaded} /></Modal>} /> </Routes>}
    </>
  );
} 
/*<Route path="/ingredients/:id" element={<IngredientDetailsPage />} />*/