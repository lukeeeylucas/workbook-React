import React from "react";
import { Link } from "react-router-dom";
import FormWrapper from "../../UI/FormWrapper";
import { FormGroup, Label, Input } from "./Form";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');


const Login = (props) =>{
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: eidValue,
    isValid: eidIsValid,
    hasError: eidHasError,
    valueChangeHandler: eidChangeHandler,
    inputBlurHandler: eidBlurHandler,
    reset: resetEid,
  } = useInput(isNotEmpty);
  const {
    value: bdayValue,
    isValid: bdayIsValid,
    hasError: bdayHasError,
    valueChangeHandler: bdayChangeHandler,
    inputBlurHandler: bdayBlurHandler,
    reset: resetBday,
  } = useInput(isNotEmpty);



  let formIsValid = false;

  if ( firstNameIsValid &&  lastNameIsValid && emailIsValid && eidIsValid &&  bdayIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    alert('Your data was saved successfully!');
    console.log('Submitted!');
    console.log( firstNameValue,  lastNameValue,  emailValue, eidValue, bdayValue);
    props.onAddUserHandler( firstNameValue, lastNameValue,  emailValue, eidValue, bdayValue);


      resetEmail();
      resetFirstName();
      resetLastName();
      resetEid();
      resetBday();
    
  };
 
  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  const eidClasses = eidHasError ? 'form-control invalid' : 'form-control';
  const bdayClasses = bdayHasError ? 'form-control invalid' : 'form-control';
  
  


    return (
 <FormWrapper>
      <form onSubmit = {submitHandler}>
        <FormGroup>
         <h2 className= 'centered' >Register Here!</h2>

         <div className= {firstNameClasses}>
                <Label>First Name</Label>
            <Input id = "firstname"
                  type= "text" 
                   pattern="[a-zA-Z]*"
                  value= {firstNameValue} 
                  onChange = {firstNameChangeHandler} 
                  onBlur = {firstNameBlurHandler}
              />
              {firstNameHasError && <p className = "error-text">First name is required.</p>}
              </div>
              <div className= {lastNameClasses}>
                <Label>Last Name</Label>
            <Input id = "lastname"
                  type= "text" 
                   pattern="[a-zA-Z]*"
                  value= {lastNameValue} 
                  onChange = {lastNameChangeHandler} 
                  onBlur = {lastNameBlurHandler}
              />
              {lastNameHasError && <p className = "error-text">Last Name is required.</p>}
              </div>

            <div className= {emailClasses}>
              <Label htmlFor="email">Email</Label>
                  <Input id="email" 
                    type= "email"
                    value = {emailValue} 
                    onChange = {emailChangeHandler} 
                    onBlur ={emailBlurHandler}
                  />
            {emailHasError && <p className= "error-text">Please input a valid email address.</p>}
            </div>

            <div className= {eidClasses}>
                <Label>Enterprise ID </Label>
            <Input id = "eid"
                  type= "number" 
                  value= {eidValue} 
                  onChange = {eidChangeHandler} 
                  onBlur = {eidBlurHandler}
              />
              {eidHasError && <p className = "error-text">EID should not be empty field</p>}
              </div>

              <div className= {bdayClasses}>
                <Label>Birthdate</Label>
            <Input id = "bday"
                  type= "date" 
                  value= {bdayValue} 
                  onChange = {bdayChangeHandler} 
                  onBlur = {bdayBlurHandler}
              />
              {bdayHasError && <p className = "error-text">Please input your date of birth. </p>}
              </div>

           
          <div className= "form-actions">
          <button  className= 'btn' disabled = {!formIsValid}>Sign-up</button>


          </div>
            <div>
            <p>You already have an existing account? </p>
            <Link to = '/login'><p>Log-in here!</p></Link>
            </div>
            

        </FormGroup>
      </form>
        
      </FormWrapper>
    );
}

export default Login;
