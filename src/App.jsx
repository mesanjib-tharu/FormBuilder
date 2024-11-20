import React from "react"
import { FormBuilder,FormDragable } from "./components";


export default function App() {

  const initialState = [{
    type:"input",
    value:""
  },
  {
    type:"select",
    value:""
  },
  {
    type:"radio",
    value:false
  },
]







  return (
    <React.Fragment>
    <div className="flex justify-between gap-2 border h-screen"> 

    {/* aside body  */}
        <div className="aside w-[400px] border-r-8 mt-2">
          <h3 className="font-bold mb-4">Drag and Drop</h3>
          <FormDragable initialState={initialState} />
        </div>


        {/* main body  */}
        <div className="main w-[600px] mt-2">
          <FormBuilder />
        </div>


    </div>
    </React.Fragment>
  )
}