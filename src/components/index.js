


import { lazy } from "react";

const FormBuilder = lazy(()=> import("./FormBuilder"));
const FormDragable = lazy(()=> import("./FormDragable"));

export { FormBuilder, FormDragable}