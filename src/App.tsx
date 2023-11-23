import '../src/css/App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
//swiper
import "swiper/css/pagination";
import "swiper/css/navigation";

//상품 컨텐츠
import data from './db/item1.ts';
import Footer from './components/Footer.tsx'; //Footer 
import Woman from './components/Woman.tsx'; //Woman
import Men from './components/Men.tsx'; //Men
import Banner from './components/Banner.tsx'; //Banner
import Collection1 from './components/Collection1.tsx'; //Collection1
import Styling from './components/Styling.tsx'; //Collection1
import Header from './components/Header.tsx';
import Mainslider from './components/Mainslider.tsx';// 메인페이지 슬라이드 배너
import Login from './components/Login.tsx';// 로그인
import Cart from './components/Cart.tsx'
//상세페이지
import Detail from './components/Detail.tsx';
import React from 'react';

export interface Item1 {
  id: number;
  title: string;
  product_img: string;
  imgPage: string;
  price: string;
  sale_price: string;
  discount: string;
  SubImgDetail_set: { imgDetail: string }[];
  optionImg: { optionDetail: string }[];
  itemNumber: string;
  made: string;
}

function App(): JSX.Element {
  const [item1] = useState<Item1[]>(data);
  window.scrollTo(0, 0);

  return (
    <div className="main_wrap">
      <a href="/App.js">
        <img
          src="/img/main_page/bn/top_bn.png"
          style={{ position: "fixed", zIndex: 300 }}
        />
      </a>
      {/* header */}
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ width: "100%" }}>
              <Mainslider />

              {/* ===== 상품 컨텐츠 시작 ===== */}
              <Woman />
              <Men />
              <Banner />
              <Collection1 />
              <Styling />
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail item1={item1} i={0} />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


