import FormWrapper from "../../UI/FormWrapper";
import classes from './WorkbookForm.module.css';


const WorkbookForm= () =>{
    function handleWorkbookCreation(event){
        event.prevent.defaultl();
    }


    return (
        <FormWrapper>
            <form className= {classes.form} onSubmit = {handleWorkbookCreation}>
                <h2 className= 'centered' >New Workbook</h2>
                        <div className= {classes.control}>
                        <label htmlFor='title'>Workbook Title</label>
                        <input type='text' id='title' />
                        </div>                  
                    <div className= {classes.control}>
                        <label htmlFor='text'>Details</label>
                        <textarea id='text' rows='7'></textarea>
                    </div>
                  <div className={classes.action}>
                        <button className= 'btn'>Add</button>
            </div>
    </form>       
</FormWrapper>
    );
}
export default WorkbookForm;