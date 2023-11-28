import React from "react";
import * as S from './styled';
import Navgation from "../Head/Navgation";
import "../Profile/MypageCSS.css";

const Img = {
  email_Img: [
    {github:"img/Github.png",Google:"img/Google.png",Instagram:"img/Instagram.png"}
    // Add other users as needed
  ]
};

const Email = {
  user_email: [
    { email: "sw마이스터고@dgsw.hs.kr",PhoneNum: "053-231-9226"},
    // Add other users as needed
  ]
};

const User = {
  user_data: [
    { name: "박지민", class: "1학년 1반 3번", profile_url: "img/profile.png", id: "parkjimin123", password: "hahaha123" },
    // Add other users as needed
  ]
};

const Mypage = () => {
  const user = User.user_data[0]; // Assuming you're working with the first user for now
  const email = Email.user_email[0]
  const email_Img=Img.email_Img[0]


  return (
    <div>
      <Navgation />
        <div style={{ display: "flex",justifyContent:"space-between",alignContent:"center",paddingTop:"50px"}}>
          <div className="date-box" >
              
              <div style={{display:"flex",justifyContent:"center",alignContent:"center",paddingTop:"50px"}}>
                <img src={user.profile_url} alt="Profile" />
              </div>
              
              <div className="user-info" >
                <h class="name-date">{user.name}</h>
                <h class="name-date">{user.class}</h>
              </div>
            
              <div className="user-info">
                <h className="id-date">{user.id}</h>
                <h className="id-date">{user.password.replace(/./g, '*')}</h>
              </div>
              
              <div className="user-info">
                <button className="IdchangeButton">수정하기</button>
              </div>
          </div>
           
          <div className="date-bigbox">
            <div style={{marginTop:"15vh"}}>
                <div style={{display:"block"}}>
                  <label className="label">메일:</label>
                  <h2 className="email-date">{email.email}</h2>
                </div>
                <div>
                  <label className="label">전화번호:</label>
                  <h2 className="email-date">{email.PhoneNum}</h2>
                </div>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <button className="email-changeButton">중요사항 변경 신청하기</button>
                </div>
              </div>

              <div className="Img" style={{position:"absolute"}}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <img src={esmail_Img.github}/>
                </a>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  <img src={email_Img.Google}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src={email_Img.Instagram}/>
                </a>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Mypage;
