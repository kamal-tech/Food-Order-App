import React, {useContext, useEffect, useState} from "react";
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props){
    const cartCtx = useContext(CartContext)
    const {items} = cartCtx
    const [btnBump, setBtnBump] = useState(false)
    
    useEffect(()=>{
        if(items.length === 0) return
        setBtnBump(true)
        const timer = setTimeout(()=>{setBtnBump(false)},300)
        return () => clearTimeout(timer)
    },[items])

    const numberOfCartItems = cartCtx.items.reduce((currNumber,item)=>{
        return currNumber += item.amount
    },0)

    const btnClass = `${classes.button} ${btnBump && classes.bump}`

    return <button className={btnClass} onClick={props.cartClickHandler}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}