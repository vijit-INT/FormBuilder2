import React, { useState, useEffect } from 'react'
import Button from '../Components/button'
import styles from './FormBuilder.module.css'
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { ReactFormGenerator } from 'react-form-builder2';
import * as variables from '../variables'
const ProjectBar = (props) => {
    const [pData, setpData] = useState()
    const [preview, setPreview] = useState(false);
    useEffect(() => {
        setpData(props.data)
         console.log("vijit",pData)
    }, [props])

    const previewForm = () => {
        setPreview(true)
    }

    const build = () => {
         console.log("onBuild",props.data) 
    }

    const onCloseModal = () => {
        setPreview(false)
    }
  
    const _onSubmit = (props) => {
        console.log("onSubmit", props)
    }

    return (
        <div className={styles.borjectbarMainDiv}>
            <div onClick={previewForm}><Button label={"Preview"} color={"blue"} /></div>
            <div onClick={build}><Button label={"Build"} color={"yellowGreen"} left={"15px"} right={"15px"} /></div>

            <Modal open={preview} onClose={onCloseModal} width={"700px"}>
                <div className={styles.modal}>
                    <ReactFormGenerator
                        download_path=""
                        back_action="/"
                        // back_name="Back"
                        answer_data={{}}
                        // action_name="Save"
                        form_action="/"
                        // form_method="POST"
                        onSubmit={_onSubmit}
                        variables={variables}
                        data={pData}

                    />
                </div>
            </Modal>
       
        </div>
    )

}

export default ProjectBar