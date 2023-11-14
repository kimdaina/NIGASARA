import React from 'react';
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillCartFill,BsFillHouseFill,BsFillTelephoneFill,BsPersonFill} from "react-icons/bs";
import '../Head/NavgationCss.css'

export default function Navgation(){
 
  const navgation=useNavigate();
  const location=useLocation();

  const isMain = location.pathname = '/main' //메인 페이지
  const isCart = location.pathname = '/cart'  //장바구니 페이지
  const isProfil = location.pathname = '/profil'  //프로필 페이지
  const isCall = location.pathname = '/call'  //문의 페이지

  return(
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}> {/*고정, 양 끝에 위치*/}
      
      <h1 onClick={()=>{navgation("/main")}}>NIGASARA</h1>  {/*클릭 시 메인 페이지로 이동*/}
      <nav>
        <ul>
          
          <li className={isMain ? 'link active' : 'link'} onClick={()=>{navgation("/main")}}> {/*클릭 시 메인 페이지로 이동*/}
            <BsFillHouseFill className='icon'/>
          </li>
          
          <li className={isProfil ? 'link active' : 'link'} onClick={()=>{navgation("/profil")}}> {/*클릭 시 프로필 페이지로 이동*/}
            <BsPersonFill className='icon'/>
          </li>
          
          <li className={isCart ? 'link active' : 'link'} onClick={()=>{navgation("/cart")}}> {/*클릭 시 장바구니 페이지로 이동*/}
            <BsFillCartFill className='icon'/>
          </li>
          
          <li className={isCall ? 'link active' : 'link'} onClick={()=>{navgation("/call")}}> {/*클릭 시 문의 페이지로 이동*/}
            <BsFillTelephoneFill className='icon'/> 
          </li>

        </ul>
      </nav>
   
    </header>
  )
}