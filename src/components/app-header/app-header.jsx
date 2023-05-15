import React from "react";
import Login from '../../pages/login';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from "./app-header.module.css";
import { Link, useNavigate } from 'react-router-dom';

export default function AppHeader() {
  /*const navigate = useNavigate();

  const toProfile = () => {
    const initialBreadcrumb = [{ path: '/', url: '/', title: 'Home' }];
    navigate('/profile', { state: initialBreadcrumb });
  };*/

  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.button_container}>
        <Link to='/' type="button" className={HeaderStyles.button_burger}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default">Конструктор</p>
        </Link>
        <Link type="button" className={HeaderStyles.button_list}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
        </Link>
      </div>
      <div className={HeaderStyles.burger_logo}>
        <Logo />
      </div>
      <Link to='/profile' type="button" className={HeaderStyles.button_profile} /*onClick={toProfile}*/>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
      </Link>
    </header>
  );
}
