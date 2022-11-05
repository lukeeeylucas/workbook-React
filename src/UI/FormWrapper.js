import classes from './FormWrapper.module.css';

const FormWrapper = (props) =>{
    return <div className = {classes.formwrapper}>{props.children}</div>;
};

export default FormWrapper;