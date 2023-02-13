import axios from '../Utils/Axios'
import { v4 as uuidv4 } from 'uuid';

function formSchema(schema){
    let requestBody = {};
    requestBody.id = uuidv4;
    requestBody.formData = schema;
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post('/data', requestBody);
            resolve(response)
        } catch (error) {
            reject({message : error})
        }
    })
}

export {formSchema}