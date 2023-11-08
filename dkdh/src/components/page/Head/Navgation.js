import React from 'react';
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillCartFill,BsFillHouseFill,BsFillTelephoneFill,BsPersonFill} from "react-icons/bs";
import '../Head/NavgationCss.css'

export default function Navgation(){
 
  const navgation=useNavigate();
  const location=useLocation();

  const isMain = location.pathname = '/main'
  // const isCart = location.pathname = '/cart'
  const isProfil = location.pathname = '/profil'
  // const isCall = location.pathname = '/call'

  return(
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
      <h1 onClick={()=>{navgation("/main")}}>NIGASARA</h1>
      
      <nav>
        <ul>
          <li className={isMain ? 'link active' : 'link'} onClick={()=>{navgation("/main")}}>
            <BsFillHouseFill className='icon'/>
          </li>
          <li className={isProfil ? 'link active' : 'link'} onClick={()=>{navgation("/profil")}}>
            <BsPersonFill className='icon'/>
          </li>
          {/* <li className={isCart ? 'link active' : 'link'} onClick={()=>{navgation("/cart")}}>
            <BsFillCartFill/>
          </li>*/}
          
          {/* <li className={isCall ? 'link active' : 'link'} onClick={()=>{navgation("/call")}}>
            <BsFillTelephoneFill/>
          </li>  */}
        </ul>
      </nav>
   
    </header>
  )
}