import React from "react";
import '../Main/MainCss.css';
import Navgation from "../Head/Navgation";

const obj = {
  data: [ //상품이름/가격/이미지
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      { snack: "포스틱", price: "3000", url: "img/snack.jpeg" },
      // Add other snack items as needed
  ]
};

function Main() {
    return (
      <div>
        <Navgation /> {/* 네비게이션 페이지 불러오기 */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"  }} className="tlqkf">
            {obj.data.slice(0,).map((item, index) => (
              <div className="obj-box" key={index}> {/* 등록된 상품의 UI */}
                <h4>{item.snack}</h4> {/*상품명*/}
                <img src={item.url} style={{ width: "230px", height: "230px" }} alt={`Snack ${index + 1}`} /> {/*상품 이미지의 주소*/}
                <h5>{item.price}원</h5>  {/*상품 가격*/}
              </div>
            ))}
          </div>
      </div>
    );
  }

export default Main;