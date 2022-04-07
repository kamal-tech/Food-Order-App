import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //this value is always a string even id type is number
    const enteredAmountNumber = +enteredAmount; // to force number conversion
   
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef} //ref won't work in custom components, to make it work use forwardRef in the componenet were we want to receive ref
        label="Amount"
        input={{
          //js exp that has js obj hence double braces one for js exp another for js obj
          id: "_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a Valid amount between 1 to 5</p>}
    </form>
  );
}
