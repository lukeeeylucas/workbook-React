import {  useState } from "react";
import WorkbookList from "./WorkbookList";
import WorkbookForm from "./WorkbookForm";
import data from  './Workbook.json';


const WorkbookDisplay = () =>{
    const [workbookData, setWorkbookData] = useState(data);
    const onAddWorkbookHandler = (
            titleRaw,
            detailsRaw

    )=>{
        setWorkbookData((prevUserData) =>{
            return [
                ...prevUserData,
                {
                    id: Math.random().toString(),
                    workbookTitle: titleRaw,
                    workbookDetails: detailsRaw
                   
                },
            ];
        });
    };
    return(
        <div>
                 <WorkbookForm onAddWorkbookHandler = {onAddWorkbookHandler}/>
                 <WorkbookList workbookData= {workbookData}/>

        </div>
        
    );
}

export default WorkbookDisplay;