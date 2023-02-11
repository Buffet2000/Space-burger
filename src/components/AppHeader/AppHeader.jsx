import React from 'react'
import { Logo, BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from "./AppHeader.module.css"

export default function AppHeader() {
	return (
		<header className={HeaderStyles.header}>
			<button type='button' className={HeaderStyles.button_burger}><BurgerIcon/><p>Конструктор</p></button>
			<button type='button' className={HeaderStyles.button_list}><ListIcon/><p>Лента заказов</p></button>
			<div className={HeaderStyles.burger}><Logo/></div>
		</header>
	)
}