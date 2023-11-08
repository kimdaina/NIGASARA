import React from "react";
import '../Main/MainCss.css';
import Navgation from "../Head/Navgation";

const obj = {
  data: [
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
         <Navgation/>
        <div style={{ marginLeft: "10%"}} className="tlqkf">
         
            {obj.data.slice(0, itemsPerPage).map((item, index) => (
                
                <div className="snackS" key={index}>
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
