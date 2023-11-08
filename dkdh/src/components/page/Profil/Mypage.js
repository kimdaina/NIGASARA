import React,{useState} from "react";
import * as S from './styled'
import Navgation from "../Head/Navgation";

const Mypage=()=>{
    // const [uploadedImage, setUploadedImage]=useState(null);
    
    // const onChangeImage = e => {
    //     const file = e.target.files[0];
    //     const imageUrl = URL.createObjectURL(file);
    //     setUploadedImage(imageUrl);
    // }
    return (
          <div>
            <Navgation/>
            {/* <div>
              <p>My Page</p>
              <img src="./images/logout.png" alt="로그아웃" />
            </div>
            <div>
              {uploadedImage ? (
                <img src={uploadedImage} alt="프로필 없을때" />
              ) : (
                <img src="./images/profile.png" alt="프로필사진" style={{width:"30px",height:"30px"}}/>
              )}
              <input type="file" onChange={onChangeImage} />
            </div> */}
          </div>
      );
}
export default Mypage;
