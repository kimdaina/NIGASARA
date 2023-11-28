// import * as S from "./components/style/styled";
import './App.css';
import Navgation from "./components/page/Head/Navgation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useRef,useState } from 'react';

import Mypage from './components/page/Profil/Mypage';
import Main from './components/page/Main/Main';
import Cart from './components/page/CartPage/Cart';
import Call from './components/page/Call/Call'
import Login from './components/page/Login/Login';

function App() {
  return (
    // <Sign_up/>
    // <Cart/>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/call" element={<Call/>}></Route>
          <Route path="/profil" element={<Mypage/>}></Route> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
