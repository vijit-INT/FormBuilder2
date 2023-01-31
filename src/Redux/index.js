import { configureStore } from "@reduxjs/toolkit";
import FormSchema from "./FormSchema";

const store = configureStore({
  reducer: {
    Form : FormSchema.reducer
  },
});

export default store;
