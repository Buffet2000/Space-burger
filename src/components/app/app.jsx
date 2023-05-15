import React from "react";
import AppHeader from "../app-header/app-header";
import { getIngredientsData } from "../../services/actions/all-ingredients";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import HomePage from "../../pages/home";
import Profile from '../../pages/profile';
import Login from '../../pages/login';
import Register from '../../pages/register';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
//import { ProvideAuth } from './services/auth';

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
      </Routes>
    </BrowserRouter>
    /*</ProvideAuth>*/
  );
} 