import React, { useState, useEffect } from 'react'
import Button from '../Components/button'
import styles from './FormBuilder.module.css'
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
// import { ReactFormGenerator } from 'react-form-builder2';
// import * as variables from '../variables'
import { useNavigate } from 'react-router-dom';
import { Formio } from "react-formio";
import { useSelector } from 'react-redux';

const ProjectBar = (props) => {

    // const rData = useSelector((state)=> state.Form.FormSchema)
    const navigate = useNavigate();
    const [pData, setpData] = useState(false)
    const [preview, setPreview] = useState(false);

    const previewForm = () => {
        console.log("prop", props.formData)
        setPreview(true)
        Formio.createForm(document.getElementById('formio'), { components: props.formData})
    }

    const build = () => {
        console.log("onBuild", props.formData)
        navigate("/formPresenter")
    }

    const onCloseModal = () => {
        setPreview(false)
    }

    const _onSubmit = (props) => {
        console.log("onSubmit", props)
    }

    return (
        <div>
            <div className={styles.borjectbarMainDiv}>
                <h3>Form Builder</h3>
                <div className={styles.subdiv1}>
                    {/* <div onClick={previewForm}><Button label={"Preview"} color={"blue"} /></div> */}
                    <div onClick={build}><Button label={"Build"} color={"yellowGreen"} left={"15px"} right={"15px"} /></div>
                </div>
                {/* {
                preview && <div className={styles.modal}>
                    <div className={styles.modalBody}>
                    <div id='formio' />
                    </div>
                 <br />
                 <br />
                <button onClick={onCloseModal}>Close Modal</button>
                </div> 
               } */}
            </div>
            <Modal open={preview} onClose={onCloseModal}>
                <div className={styles.modal}>
                    <div id='formio' ></div>
                </div>
            </Modal>
        </div>
    )

}

export default ProjectBar