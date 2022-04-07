import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

function Header(props){
    return <>
        <header className={classes.header}>
            <h1>Have A Meal!</h1>
            <HeaderCartButton cartClickHandler={props.cartClickHandler}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table full of delicious food"/>
        </div>
    </>
}

export default Header;