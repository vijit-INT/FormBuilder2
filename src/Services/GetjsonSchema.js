import axios from '../Utils/Axios'

function formSchema(){
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get("/data") 
            resolve(response.data)
        } catch (error) {
            reject({message: error})
        }
    })
}

export { formSchema }