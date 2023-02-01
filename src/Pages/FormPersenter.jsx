import React from 'react';
import styles from "./FormBuilder.module.css";
import { ReactFormGenerator } from 'react-form-builder2';
import img1 from '../css/images/int_white_image.png';
import Button from '../Components/button';

const FromPrsenter = () => {
    const pData =[
        {
            "id": "B5CE7822-570F-467C-8A9D-6574B05D5E91",
            "element": "Header",
            "text": "Header Text",
            "static": true,
            "required": false,
            "bold": false,
            "italic": false,
            "content": "Placeholder text...",
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true
        },
        {
            "id": "AFAE0942-6081-403E-9089-8B596FB4C353",
            "element": "LineBreak",
            "text": "Line Break",
            "static": true,
            "required": false,
            "bold": false,
            "italic": false,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true
        },
        {
            "id": "3A26BD4B-6685-4296-BD94-6A24191006FB",
            "element": "Dropdown",
            "text": "Dropdown",
            "required": false,
            "canHaveAnswer": true,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "dropdown_EB2B091E-AEF3-45C3-91BB-BF9A1F529B55",
            "label": "Placeholder label",
            "options": [
                {
                    "value": "place_holder_option_1",
                    "text": "Place holder option 1",
                    "key": "dropdown_option_8DCCED45-95E0-448F-80FF-EC3ED34D5171"
                },
                {
                    "value": "place_holder_option_2",
                    "text": "Place holder option 2",
                    "key": "dropdown_option_3C8C0253-2DD9-4DD9-9963-66AAA6144ECE"
                },
                {
                    "value": "place_holder_option_3",
                    "text": "Place holder option 3",
                    "key": "dropdown_option_B310D7F5-3DC0-48F5-9B15-B40E172F2EEB"
                }
            ]
        },
        {
            "id": "F6A8BB7C-4503-477F-BE81-CA5FF1B0DD07",
            "element": "Checkboxes",
            "text": "Checkboxes",
            "required": false,
            "canHaveAnswer": true,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "checkboxes_E5EABE5F-DD2E-4CFC-8AD0-F8AC9609FD2B",
            "label": "Placeholder label",
            "options": [
                {
                    "value": "place_holder_option_1",
                    "text": "Place holder option 1",
                    "key": "checkboxes_option_D364FFD2-C628-428E-8E2E-9CC0653B92C5"
                },
                {
                    "value": "place_holder_option_2",
                    "text": "Place holder option 2",
                    "key": "checkboxes_option_56AF2A99-7BCF-4387-BFAF-ADDA41BAE075"
                },
                {
                    "value": "place_holder_option_3",
                    "text": "Place holder option 3",
                    "key": "checkboxes_option_B11B7607-EC63-4C1E-98FD-4539C83040D7"
                }
            ]
        },
        {
            "id": "1B6A40C5-3585-4827-BF98-1650D58C5A23",
            "element": "EmailInput",
            "text": "Email",
            "required": false,
            "canHaveAnswer": true,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "email_input_743D30FC-1177-4C38-9CE7-F4A715FBF22B",
            "label": "E-Mail"
        },
        {
            "id": "4499DB0F-89B6-48F5-B59D-69508ECEBD45",
            "element": "TextInput",
            "text": "Text Input",
            "required": false,
            "canHaveAnswer": true,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "text_input_8C6B0475-9384-4243-9D3F-3AF3C4119B9E",
            "label": "Placeholder label"
        },
        {
            "id": "0DE2C734-6A99-485A-BB28-BF45D99DEC2D",
            "element": "NumberInput",
            "text": "Number Input",
            "required": false,
            "canHaveAnswer": true,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "number_input_00D0067E-5D88-4DCC-ACF6-09D991C41979",
            "label": "Placeholder label"
        },
        {
            "id": "78E2B0C2-AF98-4F30-ADFF-1A93AE7A752B",
            "element": "PhoneNumber",
            "text": "Phone Number",
            "required": false,
            "canHaveAnswer": true,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "phone_input_002E5BF0-9E60-4BC0-AC48-B38DAE3C8FA1",
            "label": "Phone Number"
        },
        {
            "id": "9D32F1C5-A7F4-4E16-AD5A-01A889CCE928",
            "element": "TextArea",
            "text": "Multi-line Input",
            "required": false,
            "canHaveAnswer": true,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "text_area_8F2D991A-9108-4B23-A273-9729CEDB5DDC",
            "label": "Placeholder label"
        },
        {
            "id": "BE4B9A59-7C6A-4694-A9BF-6EF8E65D98A5",
            "element": "Image",
            "text": "Image",
            "required": false,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "src": "",
            "field_name": "image_44A3CB0B-1FD8-4A63-8B2C-6B9CCDC66752"
        },
        {
            "id": "AFA2F85B-6788-4982-A124-E0B50BB9079A",
            "element": "Rating",
            "text": "Rating",
            "required": false,
            "canHaveAnswer": true,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "rating_D8745AF9-8566-4614-9729-0CAA24946B10",
            "label": "Placeholder label"
        },
        {
            "id": "7BDE8EDC-1BE8-4A95-8BC3-12A29188A622",
            "element": "DatePicker",
            "text": "Date",
            "required": false,
            "readOnly": false,
            "defaultToday": false,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "dateFormat": "MM/dd/yyyy",
            "timeFormat": "hh:mm aa",
            "showTimeSelect": false,
            "showTimeSelectOnly": false,
            "showTimeInput": false,
            "field_name": "date_picker_00354F76-CFE7-4F35-B2C4-D8BB1F50CDD1",
            "label": "Placeholder label"
        },
        {
            "id": "303ACF7E-A62F-4E87-A873-5AF7B83C1080",
            "element": "Signature",
            "text": "Signature",
            "required": false,
            "readOnly": false,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "signature_6DDFA496-09BA-4E7F-8CCE-39DFB4A73604",
            "label": "Signature"
        },
        {
            "id": "01A1C646-577E-40B1-ADCD-DD1717DA3ECE",
            "element": "HyperLink",
            "text": "Website",
            "static": true,
            "required": false,
            "bold": false,
            "italic": false,
            "content": "Placeholder website Link...",
            "href": "http://www.example.com",
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true
        },
        {
            "id": "4F5448A6-97E7-4B69-9189-BF8138B0ACBF",
            "element": "Download",
            "text": "File Attachment",
            "static": true,
            "required": false,
            "bold": false,
            "italic": false,
            "content": "Placeholder file name...",
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "_href": "",
            "file_path": "",
            "field_name": "download_88F7941D-5887-4D9F-ACB5-5649E9955D38"
        },
        {
            "id": "AC745EED-DCE8-4DB7-8500-E69CDA964631",
            "element": "Range",
            "text": "Range",
            "required": false,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "step": 1,
            "default_value": 3,
            "min_value": 1,
            "max_value": 5,
            "min_label": "Easy",
            "max_label": "Difficult",
            "field_name": "range_465521E9-BF2C-41F3-9354-83423159805C",
            "label": "Placeholder label"
        },
        {
            "id": "72B353FE-62FD-4652-9997-4928095DAE3C",
            "element": "Camera",
            "text": "Camera",
            "required": false,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "camera_FB04F3D6-AE0D-4B5D-8BF0-E367E41CE562",
            "label": "Placeholder label"
        },
        {
            "id": "C1851267-2769-4CA9-BB5C-F1B25B903318",
            "element": "FileUpload",
            "text": "File Upload",
            "required": false,
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true,
            "field_name": "file_upload_D8534CFE-9858-4BA3-806F-55C5DAD07DF4",
            "label": "Placeholder label"
        }
    ]
  return (
    <div className={styles.fpMainDiv}>
        <div className={styles.fpSubDiv1}>
            <img src={img1} style={{width:"144px", marginTop:"15px"}}/>
             <Button top={"200px"} label={"Genrate Link"}/>
             <Button top={"20px"} label={"Deploy"} left={"25px"} right={"25px"}/>

        </div>
        <div className={styles.fpSubDiv2}> 
           <div className={styles.fpNav}> 
              <h3>Form Builder </h3>
           </div>
           <div className={styles.fpSD2div1}>
            
           <ReactFormGenerator
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

                    />
                    
           </div>
        </div>
    </div>
  )
}

export default FromPrsenter