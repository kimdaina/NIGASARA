import React from "react";
import Navgation from "../Head/Navgation";

const Cartobj = {
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
      { snack: "포스틱", price: "3000원", url: "img/snack.jpeg" },
      // Add other snack items as needed
  ]
};

function Cart() {

    return (
      <div>
         {/* <Navgation/> 네비게이션 페이지 불러오기 */}
        <div>
            {Cartobj.data.map((item, index) => (
                
                <div key={index}>  {/*등록된 상품의 UI*/}
                   <h4>{item.snack}</h4>
                   <img src={item.url}></img>
                   <h5>{item.price}</h5>
                </div>

            ))}
        </div>
      </div>
    );
}

export default Cart;
