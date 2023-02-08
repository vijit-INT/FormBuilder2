import React, { useState, useEffect } from 'react'
// import { ReactFormBuilder } from 'react-form-builder2'
// import "../css/app.css"
// import 'react-form-builder2/dist/app.css';
import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";
import { formIoData } from "./consts";
import "formiojs/dist/formio.full.css";
import styles from './FormBuilder.module.css'
import ProjectBar from './ProjectBar';


const Formbuilder = () => {

  const [formData, setFormData] = useState(formIoData);
  const [formSchema, setFormSchema] = useState();

  // useEffect(() => {
  //   console.log("useEffect data", formSchema)
  //   Formio.createForm(document.getElementById('formio'), { components: formData.components }).then((form) => {
  //     form.submission = {
  //       data: {
  //         firstName: 'Joe',
  //         lastName: 'Smith'
  //       }
  //     };
  //   });
  // }, [formSchema])

  // useEffect(()=>{ 
  //   Formio.createForm(document.getElementById("formio-result"), {
  //     components: formData.components
  //   }).then((form) => {
  //     console.log("component", form.component.components);
  //     setFormSchema(form.component.components)
  //     //   setFormData(form)
  //     form.on("submit", (data) => setFormSchema(data.component.components));
  //     // console.log(document.getElementById("formio-result"));
  //   })
  //  } )



  useEffect(() => { console.log("formSchema useEffect", formSchema); }, [formSchema]);

  const onChange = (data) => {
    setFormSchema(data.components)
    console.log("onChange", formSchema);  

    // Formio.createForm(document.getElementById('formio'), {components: data.components}).then((form) => {
    //   form.submission = {
    //     data: {
    //       firstName: 'Joe',
    //       lastName: 'Smith'
    //     }
    //   };

    // });
  }

  return (
    <div>
      <ProjectBar formData={formSchema} />
      <div className={styles.fbSubdiv1}>
        <FormBuilderIo
          form={formIoData}
          onChange={onChange}
        //   onSubmit={(data) => {
        //     console.log(data);
        //   }}
        //   saveForm={(data) => setFormData("saveForm", data)}
        //   saveText="Save Form"
        //   onSubmitDone={(data) => console.log("onSD", data)}
        />
        <div style={{ display: "none" }}>
          <div id="formio-result" />
        </div>

      </div>
    </div>
  )
}

export default Formbuilder