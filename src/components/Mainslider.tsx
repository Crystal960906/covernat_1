import React from "react";
import { useState } from 'react';
import { Routes, Route,  useNavigate,useParams } from 'react-router-dom'
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../src/styles.css';
import { Pagination, Navigation } from "swiper/modules";
//슬라이드
import 'swiper/css';
import 'swiper/css/scrollbar';
import data from '../db/item1.ts';

const Mainslider = () => {
    let [item1] = useState(data);
    let { id } = useParams();
    let navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(1);
return (
<div>
    {/* main slide */}
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    loop={true}
    pagination={{
        clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="slider"
    >
    <SwiperSlide>
        <img src="/img/main_page/slider/slide1.jpg" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/img/main_page/slider/slide2.jpg" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/img/main_page/slider/slide3.jpg" />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/img/main_page/slider/slide4.jpg" />
    </SwiperSlide>
    </Swiper>
</div>
);
};

export default Mainslider;
