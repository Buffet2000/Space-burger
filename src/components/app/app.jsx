import React from "react";
import AppHeader from "../app-header/app-header";
import { getIngredientsData } from "../../services/actions/all-ingredients";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import HomePage from "../../pages/home";
import Login from '../../pages/login';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Login />} />
      </Routes>
    </BrowserRouter>
    /*</ProvideAuth>*/
  );
} 