import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.button_container}>
        <button type="button" className={HeaderStyles.button_burger}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default">Конструктор</p>
        </button>
        <button type="button" className={HeaderStyles.button_list}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
        </button>
      </div>
      <div className={HeaderStyles.burger_logo}>
        <Logo />
      </div>
      <button type="button" className={HeaderStyles.button_profile}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
      </button>
    </header>
  );
}
