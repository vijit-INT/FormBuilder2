import React, {useEffect} from 'react';
import styles from "./FormBuilder.module.css";
import { ReactFormGenerator } from 'react-form-builder2';
import img1 from '../css/images/int_white_image.png';
import Button from '../Components/button';
import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";

const FromPrsenter = () => {
    const pData =[
        {
            "label": "Select Boxes",
            "labelPosition": "top",
            "optionsLabelPosition": "right",
            "description": "",
            "tooltip": "",
            "customClass": "",
            "tabindex": "",
            "inline": false,
            "hidden": false,
            "hideLabel": false,
            "autofocus": false,
            "disabled": false,
            "tableView": false,
            "modalEdit": false,
            "values": [
                {
                    "label": "",
                    "value": "vijit",
                    "shortcut": ""
                }
            ],
            "persistent": true,
            "protected": false,
            "dbIndex": false,
            "encrypted": false,
            "redrawOn": "",
            "clearOnHide": true,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "allowCalculateOverride": false,
            "validate": {
                "required": false,
                "onlyAvailableItems": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "errorLabel": "",
            "minSelectedCountMessage": "",
            "maxSelectedCountMessage": "",
            "errors": "",
            "key": "selectBoxes",
            "tags": [],
            "properties": {},
            "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
            },
            "customConditional": "",
            "logic": [],
            "attributes": {},
            "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "type": "selectboxes",
            "input": true,
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "unique": false,
            "refreshOn": "",
            "dataGridLabel": false,
            "widget": null,
            "validateOn": "change",
            "showCharCount": false,
            "showWordCount": false,
            "allowMultipleMasks": false,
            "addons": [],
            "inputType": "checkbox",
            "fieldSet": false,
            "id": "es4exk",
            "defaultValue": {}
        },
        {
            "label": "Password",
            "labelPosition": "top",
            "placeholder": "",
            "description": "",
            "tooltip": "",
            "prefix": "",
            "suffix": "",
            "widget": {
                "type": "input"
            },
            "displayMask": "",
            "customClass": "",
            "tabindex": "",
            "autocomplete": "",
            "hidden": false,
            "hideLabel": false,
            "showWordCount": false,
            "showCharCount": false,
            "autofocus": false,
            "spellcheck": true,
            "disabled": false,
            "tableView": false,
            "modalEdit": false,
            "case": "",
            "truncateMultipleSpaces": false,
            "redrawOn": "",
            "clearOnHide": true,
            "calculateServer": false,
            "allowCalculateOverride": false,
            "validateOn": "change",
            "validate": {
                "required": false,
                "pattern": "",
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "minLength": "",
                "maxLength": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "errorLabel": "",
            "errors": "",
            "key": "password",
            "tags": [],
            "properties": {},
            "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
            },
            "customConditional": "",
            "logic": [],
            "attributes": {},
            "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "addons": [],
            "type": "password",
            "input": true,
            "multiple": false,
            "defaultValue": null,
            "protected": true,
            "unique": false,
            "persistent": true,
            "refreshOn": "",
            "dataGridLabel": false,
            "dbIndex": false,
            "customDefaultValue": "",
            "calculateValue": "",
            "encrypted": false,
            "allowMultipleMasks": false,
            "mask": false,
            "inputType": "text",
            "inputFormat": "plain",
            "inputMask": "",
            "id": "e3fus4"
        },
        {
            "label": "Number",
            "labelPosition": "top",
            "placeholder": "",
            "description": "",
            "tooltip": "",
            "prefix": "",
            "suffix": "",
            "widget": {
                "type": "input"
            },
            "displayMask": "",
            "customClass": "",
            "tabindex": "",
            "autocomplete": "",
            "hidden": false,
            "hideLabel": false,
            "mask": false,
            "autofocus": false,
            "disabled": false,
            "tableView": false,
            "modalEdit": false,
            "multiple": false,
            "persistent": true,
            "delimiter": false,
            "requireDecimal": false,
            "inputFormat": "plain",
            "protected": false,
            "dbIndex": false,
            "truncateMultipleSpaces": false,
            "encrypted": false,
            "redrawOn": "",
            "clearOnHide": true,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "allowCalculateOverride": false,
            "validateOn": "change",
            "validate": {
                "required": false,
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "min": "",
                "max": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false,
                "step": "any",
                "integer": ""
            },
            "errorLabel": "",
            "errors": "",
            "key": "number",
            "tags": [],
            "properties": {},
            "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
            },
            "customConditional": "",
            "logic": [],
            "attributes": {},
            "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "type": "number",
            "input": true,
            "unique": false,
            "refreshOn": "",
            "dataGridLabel": false,
            "showCharCount": false,
            "showWordCount": false,
            "allowMultipleMasks": false,
            "addons": [],
            "id": "e4b8fi",
            "defaultValue": null
        },
        {
            "label": "Text Area",
            "labelPosition": "top",
            "placeholder": "",
            "description": "",
            "tooltip": "",
            "prefix": "",
            "suffix": "",
            "widget": {
                "type": "input"
            },
            "displayMask": "",
            "editor": "",
            "autoExpand": false,
            "customClass": "",
            "tabindex": "",
            "autocomplete": "",
            "hidden": false,
            "hideLabel": false,
            "showWordCount": false,
            "showCharCount": false,
            "autofocus": false,
            "spellcheck": true,
            "disabled": false,
            "tableView": true,
            "modalEdit": false,
            "multiple": false,
            "persistent": true,
            "inputFormat": "html",
            "protected": false,
            "dbIndex": false,
            "case": "",
            "truncateMultipleSpaces": false,
            "encrypted": false,
            "redrawOn": "",
            "clearOnHide": true,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "allowCalculateOverride": false,
            "validateOn": "change",
            "validate": {
                "required": false,
                "pattern": "",
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "minLength": "",
                "maxLength": "",
                "minWords": "",
                "maxWords": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "unique": false,
            "errorLabel": "",
            "errors": "",
            "key": "textArea",
            "tags": [],
            "properties": {},
            "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
            },
            "customConditional": "",
            "logic": [],
            "attributes": {},
            "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "type": "textarea",
            "rows": 3,
            "wysiwyg": false,
            "input": true,
            "refreshOn": "",
            "dataGridLabel": false,
            "allowMultipleMasks": false,
            "addons": [],
            "mask": false,
            "inputType": "text",
            "inputMask": "",
            "fixedSize": true,
            "id": "emtdmx",
            "defaultValue": null
        },
        {
            "label": "Text Field",
            "labelPosition": "top",
            "placeholder": "",
            "description": "",
            "tooltip": "",
            "prefix": "",
            "suffix": "",
            "widget": {
                "type": "input"
            },
            "inputMask": "",
            "displayMask": "",
            "allowMultipleMasks": false,
            "customClass": "",
            "tabindex": "",
            "autocomplete": "",
            "hidden": false,
            "hideLabel": false,
            "showWordCount": false,
            "showCharCount": false,
            "mask": false,
            "autofocus": false,
            "spellcheck": true,
            "disabled": false,
            "tableView": true,
            "modalEdit": false,
            "multiple": false,
            "persistent": true,
            "inputFormat": "plain",
            "protected": false,
            "dbIndex": false,
            "case": "",
            "truncateMultipleSpaces": false,
            "encrypted": false,
            "redrawOn": "",
            "clearOnHide": true,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "allowCalculateOverride": false,
            "validateOn": "change",
            "validate": {
                "required": false,
                "pattern": "",
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "minLength": "",
                "maxLength": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "unique": false,
            "errorLabel": "",
            "errors": "",
            "key": "textField",
            "tags": [],
            "properties": {},
            "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
            },
            "customConditional": "",
            "logic": [],
            "attributes": {},
            "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "type": "textfield",
            "input": true,
            "refreshOn": "",
            "dataGridLabel": false,
            "addons": [],
            "inputType": "text",
            "id": "ekhi6e9",
            "defaultValue": null
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "size": "md",
            "block": false,
            "action": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "placeholder": "",
            "prefix": "",
            "customClass": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": null,
            "protected": false,
            "unique": false,
            "persistent": false,
            "hidden": false,
            "clearOnHide": true,
            "refreshOn": "",
            "redrawOn": "",
            "tableView": false,
            "modalEdit": false,
            "dataGridLabel": true,
            "labelPosition": "top",
            "description": "",
            "errorLabel": "",
            "tooltip": "",
            "hideLabel": false,
            "tabindex": "",
            "disabled": false,
            "autofocus": false,
            "dbIndex": false,
            "customDefaultValue": "",
            "calculateValue": "",
            "calculateServer": false,
            "widget": {
                "type": "input"
            },
            "attributes": {},
            "validateOn": "change",
            "validate": {
                "required": false,
                "custom": "",
                "customPrivate": false,
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
            },
            "conditional": {
                "show": null,
                "when": null,
                "eq": ""
            },
            "overlay": {
                "style": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
            },
            "allowCalculateOverride": false,
            "encrypted": false,
            "showCharCount": false,
            "showWordCount": false,
            "properties": {},
            "allowMultipleMasks": false,
            "addons": [],
            "leftIcon": "",
            "rightIcon": "",
            "id": "embqvim"
        }
    ]
     
    // const onSubmit = (data)=> {
    //     console.log("onSubmit", data)
    // }
    // form.on('change', (changed) => {
    //     console.log('Data was changed!', changed);        
    // });
    // form.on('submitDone', function(submission) {
    //     // window.location = '/app/thanks.html';

    // });

    useEffect(() => {  
        Formio.createForm(document.getElementById('formio'), {components: pData}).then((form) => {
            // form.submission = {
            //   data: {
            //   }
            // };
            // form.on('change', (changed) => {
            //     console.log('Data was changed!', changed);        
            // });
             form.on('submit', (submission) =>{
        // window.location = '/app/thanks.html';
        console.log("vijit singh", submission)
    });
          });
    }, [pData]);
    
  return (
    <div className={styles.fpMainDiv}>
        <div className={styles.fpSubDiv1}>
            <img src={img1} style={{width:"100px", marginTop:"15px"}}/>
             <Button top={"200px"} label={"Genrate Link"}/>
             <Button top={"20px"} label={"Deploy"} left={"25px"} right={"25px"}/>
        </div>
        
        <div className={styles.fpSubDiv2}> 
           {/* <div className={styles.fpNav}> 
              <h3>Form Builder </h3>
           </div> */}
           <div className={styles.fpSD2div1}>
            <div id='formio'></div>
           {/* <ReactFormGenerator
                        download_path=""
                        back_action="/"
                        // back_name="Back"
                        answer_data={{}}
                        // action_name="Save"
                        form_action="/"
                        // form_method="POST"
                        // onSubmit={_onSubmit}
                        // variables={variables}
                        data={pData}

                    /> */}
                    
           </div>
        </div>
    </div>
  )
}

export default FromPrsenter