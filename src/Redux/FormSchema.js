import { createSlice } from '@reduxjs/toolkit';

const FormSchema = createSlice({
    name: 'FormSchema',
    initialState:{
       FormSchema:[]
    },
    reducers:{
        addArray : (values, action) => {
            console.log("redux", action.payload.components)
           values.FormSchema =   action.payload
        }
    }
})

export const { addArray } = FormSchema.actions;

export default FormSchema;