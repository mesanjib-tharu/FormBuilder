import React, { useEffect, useState } from "react";

import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>



const FormDragable = ({initialState})=>{

const [username,setUsername] = useState("");
const [gender,setGender] = useState(false);
const [country,setCountry] = useState("");
const [error,setError] = useState(false);


      const handleSubmit = ()=>{
        (username === "" || gender === "" || country === "" ) ? setError(true):setError(false);
      }

      return(<>
      <div className="gap-2 p-4">
        {error ? <span className="text-red-600 text-sm">Please fill all the fields</span>:
        (username != "" && gender != "" && country !=="" )?  
          <div>
          <p>username : {username}</p>
          <p>gender : {gender}</p>
          <p>country : {country}</p>
        </div>:null

        }
        <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        >
        <div className="mb-2">
          <div className="handle border p-4 hover:cursor-pointer">
            <label htmlFor="username">User Name*</label>
            <input className="border rounded-md" type="text" name="username" placeholder="Enter your name " onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        </div>
      </Draggable>

      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        >
        <div className="mb-2 handle">
        <label htmlFor="radio">Gender</label>

             <div className="flex gap-4 border p-4 hover:cursor-pointer">
                <label htmlFor="radio">Male</label>
                <input type="radio" value={"male"} name="gender" onChange={(e)=>setGender(e.target.value)} />
                <label htmlFor="radio">Female</label>
                <input type="radio" value={"female"} name="gender"  onChange={(e)=>setGender(e.target.value)}/>
            </div>
        </div>
      </Draggable>

      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        >
        <div className="mb-2">
        <div className="handle flex justify-between border p-4">
                <div className="hover:cursor-pointer w-full p-2 rounded">
                <label htmlFor="country">Select your Country*</label>
                 <select className="w-full" name="country" onChange={(e)=> setCountry(e.target.value)}>
                     <option value=""  > please Select</option>
                     <option value="nepal"> Nepal</option>
                 </select>
                 </div>
             </div>
        </div>
      </Draggable>

      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        >
        <div className="mb-2">
        <div className="handle flex justify-end  border rounded-md">
          <input className="p-4 hover:text-green-600 hover:bg-gray-800 bg-gray-500 text-white" type="button" value={"Submit"}

          onClick={handleSubmit}
          
          />
          </div>
        </div>
      </Draggable>

      </div>
      </>

      )
}


export default  FormDragable
