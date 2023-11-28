import React from "react";
import '../Main/MainCss.css';
import Navgation from "../Head/Navgation";

const obj = {
  data: [ //상품이름/가격/이미지
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      // Add other snack items as needed
  ]
};

function Main() {
    const itemsPerPage = 8;

    return (
      <div>
         <Navgation/> {/*네비게이션 페이지 불러오기*/}
        <div style={{ marginLeft: "10%"}} className="tlqkf">
         
            {obj.data.slice(0, itemsPerPage).map((item, index) => (
                
                <div className="snackS" key={index}>  {/*등록된 상품의 UI*/}
                   <h4>{item.snack}</h4>
                   <img src={item.url} style={{width:"230px",height:"230px"}}></img>
                   <h5>{item.price}</h5>
                </div>

            ))}
        </div>
      </div>
    );
}

export default Main;
