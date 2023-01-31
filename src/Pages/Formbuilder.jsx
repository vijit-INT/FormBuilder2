import React, {useState, useEffect} from 'react'
import { ReactFormBuilder } from 'react-form-builder2'
import "../css/app.css"
import 'react-form-builder2/dist/app.css';
import styles from './FormBuilder.module.css'
import { useDispatch } from 'react-redux';
import { addArray } from '../Redux/FormSchema';
import ProjectBar from './ProjectBar';

const Formbuilder = () => {
  const [fData, setFData] = useState([]);

    const onPost = (data)=> {
      setFData([...data.task_data]);
      console.log("hello",data);
      // dispatch(addArray(data));      
      console.log("fdata",fData);
     
    }
 useEffect(()=>{console.log("fdata useEffect",fData);},[fData]);
   

  return (
    <div>
      <ProjectBar data={fData} />
     
       <hr style={{width: "90%"}}/>
       
        <ReactFormBuilder
         onPost={onPost} 
         />
    </div>
  )
}

export default Formbuilder