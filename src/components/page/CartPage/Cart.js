import React from "react";
import Navgation from "../Head/Navgation";
import '../CartPage/CartCss.css'
const Cartobj = {
  obj_date: [ //상품이름/가격/이미지
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
      { snack: "포스틱", price: "3000원",payment:"card", url: "img/snack.jpeg",plusNeed:"없음" },
]
};

const User = {
  User_date: [ //상품이름/가격/이미지
      { name:"박지민" , peofileImg:"img/profile.png",},
  ]
};


function Cart() {

    return (
      <div>
         <Navgation/> {/* <Navgation /> 네비게이션 페이지 불러오기 */}
         <button className="order">주문하기</button>
          {Cartobj.obj_date.map((item, index) => (
              <div key={index} className="cartImg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >  {/*등록된 상품의 UI*/}
                <img src={item.url} style={{width:"300px",marginLeft:"30px"}}></img>
                
                <div>
                    <h2 className="date">{item.snack}</h2>
                    <h3 className="date">가격 : {item.price}</h3>
                    <h className="date">추가 요구 사항 : {item.plusNeed}</h>
                </div>
                
            <select>
              <option value={1}>1개</option>
              <option value={2}>2개</option>
              <option value={3}>3개</option>
              <option value={4}>4개</option>
              <option value={5}>5개</option>
            </select>
            </div>
          ))}
          
      </div>
    );
}

export default Cart;

