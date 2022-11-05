import React from "react";

import {Link } from "react-router-dom";
import FormWrapper from "../../UI/FormWrapper";
import { FormGroup, Label, Input } from "./Form";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');


const Login = () =>{
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);


  let formIsValid = false;

  if ( nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    alert('Your data was saved successfully!');
    console.log('Submitted!');
    console.log( nameValue, emailValue);


      resetEmail();
      resetName();
    
  };

 
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  const nameClasses = nameHasError ? 'form-control invalid' : 'form-control';
  


    return (
 <FormWrapper>
      <form onSubmit = {submitHandler}>
        <FormGroup>
         <h2 className= 'centered' >Sign-in Form</h2>

            <div className= {emailClasses}>
              <Label htmlFor="email">Email</Label>
                  <Input id="email" 
                  value = {emailValue} 
                  onChange = {emailChangeHandler} 
                  onBlur ={emailBlurHandler}
                />
            {emailHasError && <p className= "error-text">Email does not exist</p>}
            </div>

            <div className= {nameClasses}>
                <Label>Full Name</Label>
            <Input id = "name"
                  type= "text" 
                   pattern="[a-zA-Z]*"
                  value= {nameValue} 
                  onChange = {nameChangeHandler} 
                  onBlur = {nameBlurHandler}
              />
              {nameHasError && <p className = "error-text">Please input your full name.</p>}
              </div>
          <div className= "form-actions">
          <button  className= 'btn' disabled = {!formIsValid}>Log-in</button>


          </div>
            <div>
            <p>No Account? </p>
            <Link to = '/signup'><p>Sign-up here!</p></Link>
            </div>
            

        </FormGroup>
      </form>
        
      </FormWrapper>
    );
}

export default Login;
