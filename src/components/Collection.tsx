import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import Products from './Products.tsx';

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

interface CollectionProps {
    item1: Item1[];
    activeTab: number;
}


const Collection: React.FC<CollectionProps> = ({ item1, activeTab }) => {
return (
    <div className="colItem">
    <Swiper
        slidesPerView={3}
        spaceBetween={10}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar]}
    >
        {item1.slice((activeTab - 1) * 9, activeTab * 9).map((ele, i) => (
        <SwiperSlide key={ele.id}>
            <Products item1={ele} i={i+1} key={ele.id} />
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
);
}

export default Collection;