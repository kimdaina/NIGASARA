import React from "react";
import Navgation from "../Head/Navgation";
import '../CartPage/CartCss.css'
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
  ]
};

function Cart() {

    return (
      <div>
         {/* <Navgation /> 네비게이션 페이지 불러오기 */}
         <button>주문하기</button>
          {Cartobj.data.map((item, index) => (
              <div key={index} className="cartImg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >  {/*등록된 상품의 UI*/}
                <img src={item.url} style={{width:"300px",margin:"20px",display:"inline-block"}}></img>
                
                <div style={{display:"inline-block"}}>
                    <h2 className="date">{item.snack}</h2>
                    <h3 className="date">가격 : {item.price}</h3>
                </div>

                <select style={{height: '30px',width:'80px',borderRadius: '5px',marginLeft:"auto",marginRight:"50px",boxSizing:"border-box"}}>
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

