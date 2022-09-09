import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
   margin: 0.5rem 0;

   & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
   }

   & input {
      display: block;
      width: 100%;
      border: 1px solid
         ${(props) => (props.invalid ? "rgb(182, 32, 32)" : "#CCC")};
      background-color: ${(props) =>
         props.invalid ? "rgb(234, 219, 219)" : "#FFF"};
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
   }

   & input.invalid {
      background-color: rgb(234, 219, 219);
      border: 1px solid;
   }

   & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
   }
`;

const CourseInput = (props) => {
   const [enteredValue, setEnteredValue] = useState("");
   const [isValid, setIsValid] = useState(true);

   const goalInputChangeHandler = (event) => {
      if (event.target.value.trim().length > 0) {
         setIsValid(true);
      } else {
         setIsValid(false);
      }
      setEnteredValue(event.target.value);
   };

   const formSubmitHandler = (event) => {
      event.preventDefault();
      if (enteredValue.trim().length < 1) {
         setIsValid(false);
         return;
      }
      props.onAddGoal(enteredValue);
   };

   return (
      <form onSubmit={formSubmitHandler}>
         <FormControl invalid={!isValid}>
            <label>Course Goal</label>
            <input type="text" onChange={goalInputChangeHandler} />
         </FormControl>
         <Button type="submit">Add Goal</Button>
      </form>
   );
};

export default CourseInput;
