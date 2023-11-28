import React from "react";
import axios from "axios";
import { useState } from "react";
import Main from "../Main/Main";

const Login=()=>{
    const [Id,setId]=useState("");
    const [Password,setPassword]=useState("");
    const [Button,setButton]=useState(true);
    const realId = "kiki@naver.com";
    const realPw = "12345678";

    function changeButton() {
        Id.includes('@') && Password.length >= 5 ? setButton(false) :setButton(true);
      }

    return (
        <form>
            <input onChange={e =>{
                setId(e.target.value);
            }} className="input-box"
            type="email"
            />

            <input onChange={e =>{
                setPassword(e.target.value);
            }} className="input-box"
            type="password"/>

        </form>
    )

}

export default Login;