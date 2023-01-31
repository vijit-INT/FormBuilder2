import { createSlice } from '@reduxjs/toolkit';

const FormSchema = createSlice({
    name: 'FormSchema',
    initialState:{
       FormSchema: []
    },
    reducers:{
        addArray : (values, action) => {
            console.log("redux", action.payload)
            values.FormSchema = [...action.payload.task_data]      
        }
    }
})

export const { addArray } = FormSchema.actions;

export default FormSchema;