import React, { useContext, useState } from 'react'
import { useState } from 'react';

export default function AdminLogin() {

const [isAdmin,setIsAdmin,navigate] = useContext(shopContext);
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


const onSubmitHandler = async (event)=>{
    event.preventDefault();
}


useEffect(()=>{

    if(isAdmin){

        navigate('/admin')
    }
},[isAdmin]);


  return !isAdmin && (
    <div>
        <form>
            <h3>
                <span>
                    
                </span>
            </h3>
        </form>
    </div>
  )
}
