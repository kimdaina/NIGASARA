import React from "react";
import axios from "axios";
import { useState } from "react";

const Login=()=>{
    const [Id,setId]=useState("");
    const [Password,setPassword]=useState("");


    try {
        const submitHandler = async () => {
            const res = axios.post("example.com", {
                Id, Password
            }).then((res) => res.json())
            if (!res.ok) {
                throw new Error("fail to login")
            }
            // 홈으로 보내는 코드 짜
        }
    } catch (err) {
        console.log(err);
    }
    
    return(<>
        <form onSubmit={submitHandler}>
            <label>이메일</label>
            <input onChange={(e) => setId(e.target.value)} type="email"></input>
            <label>비밀번호</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
            <button type="submit">로그인</button>
        </form>
    </>);
}

export default Login;