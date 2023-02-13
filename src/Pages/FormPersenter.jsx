import React, {useEffect, useState} from 'react';
import styles from "./FormBuilder.module.css";
import { ReactFormGenerator } from 'react-form-builder2';
import img1 from '../css/images/int_white_image.png';
import Button from '../Components/button';
import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";
import { formSchema } from '../Services/GetjsonSchema';
import { useNavigate } from 'react-router-dom';

const FromPrsenter = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState()
    useEffect(() => {
        formSchema()
            .then((vijit) => setFormData(vijit[vijit.length - 1].formData))
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        console.log("onChange", formData)
        Formio.createForm(document.getElementById('formio'), { components: formData }).then((form) => {
            form.on("submit", (submission) => {
                console.log("submission", submission)
            })
        })
    }, [formData])
  
    
  return (
    <div className={styles.fpMainDiv}>
        <div className={styles.fpSubDiv1}>
            <img src={img1} style={{width:"100px", marginTop:"15px"}}/>
             <Button top={"200px"} label={"Genrate Link"}/>
             <Button top={"20px"} label={"Deploy"} left={"25px"} right={"25px"}/>
             <div onClick={()=> navigate("/") }>
             <Button top={"20px"} label={"Back"} left={"25px"} right={"25px"}/>
             </div>
            
        </div>
        
        <div className={styles.fpSubDiv2}> 
    
           <div className={styles.fpSD2div1}>
            <div id='formio'></div>
          
           </div>
        </div>
    </div>
  )
}

export default FromPrsenter