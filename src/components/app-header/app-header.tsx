import { useState, FC } from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from "./app-header.module.css";
import { Link } from 'react-router-dom';

export const AppHeader: FC = () => {

  const [active, setActive] = useState("const")

  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.button_container}>
        <Link to='/' type="button" className={HeaderStyles.button_burger} onClick={() => setActive('const')}>
          <BurgerIcon type={active === "const" ? "primary" : "secondary"} />
          <p className={active === "const" ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Конструктор</p>
        </Link>
        <Link to='/feed' type="button" className={HeaderStyles.button_list} onClick={() => setActive('orders')}>
          <ListIcon type={active === "orders" ? "primary" : "secondary"} />
          <p className={active === "orders" ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Лента заказов</p>
        </Link>
      </div>
      <div className={HeaderStyles.burger_logo}>
        <Link to='/' onClick={() => setActive('const')}><Logo /></Link>
      </div>
      <Link to='/profile' type="button" className={HeaderStyles.button_profile} onClick={() => setActive('profile')}>
        <ProfileIcon type={active === "profile" ? "primary" : "secondary"} />
        <p className={active === "profile" ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive'}>Личный кабинет</p>
      </Link>
    </header>
  );
}
