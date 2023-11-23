import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../../src/styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';
import data from '../db/item1.ts';
import Products from './Products.tsx';
import 'swiper/css';
import 'swiper/css/scrollbar';

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



function Woman(): JSX.Element {
    let [item1] = useState<Item1[]>(data);
    return (
        <div style={{width:'100%'}}>
            <h1 className="title">WOMAN</h1>
            <div className="slide_itemBox">
            <Swiper
                className="woman"
                slidesPerView={5}
                spaceBetween={10}
                scrollbar={{}}
                modules={[Scrollbar]}
            >
                {item1.slice(0, 8).map((ele, i) => (
                <SwiperSlide key={ele.id+1}>
                    <Products item1={ele} i={i+1} key={ele.id} />
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
};

export default Woman;