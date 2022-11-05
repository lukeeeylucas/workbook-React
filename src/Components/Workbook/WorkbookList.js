import FormWrapper from "../../UI/FormWrapper";
import classes from './WorkbookForm.module.css';

const WorkbookList = (props) =>{
    return (
        <div className = {classes.centered}>
            <FormWrapper>
                <label>Accenture Trainings</label>
                <p>There's new TQ topics! </p>
            </FormWrapper>
        </div>
       

    );
}

export default WorkbookList;