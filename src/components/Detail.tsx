import '../css/Detail.css';
import React, { useRef, useState} from 'react';
import { useParams} from "react-router-dom";
import { Nav } from 'react-bootstrap'
import data from '../db/item1.ts';
//슬라이드
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

//장바구니
import { addItem } from '../components/store.tsx'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

interface SubImgDetail {
    imgDetail: string;
}

interface optionImg {
    optionDetail: string;
}

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

interface DetailProps {
    item1: Item1[];
    i: number;
}


function Detail(props: DetailProps): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const [tap, setTap] = useState<number>(0);
    let [item1] = useState(data); 
//장바구니 (유효성체크)
    const selproduct = props.item1.find((x) => x.id === Number(id));
    const dispatch = useDispatch();

    window.scrollTo(0, 0);//스크롤 최상단 고정
    return (
    <div className="sub_wrap">

        {/* 왼쪽 시작==> */}
        <div className="sub_left">
            <div className='smallimgbox'>
                {/* Map through the SubImgDetail_set array and render each image */}
            {selproduct?.SubImgDetail_set.map((detail, index) => (
                <img key={index} src={detail.imgDetail} alt={`Detail ${index + 1}`} />
            ))}
            </div>
        </div>

        {/* 가운데 시작==> */}
        <div className="sub_center">
            <Swiper scrollbar={{}} modules={[Scrollbar]} className="mySwiper">
                <SwiperSlide>
                <img src={selproduct?.SubImgDetail_set[0].imgDetail} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={selproduct?.SubImgDetail_set[1].imgDetail} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={selproduct?.SubImgDetail_set[2].imgDetail} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={selproduct?.SubImgDetail_set[3].imgDetail} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={selproduct?.SubImgDetail_set[4].imgDetail} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={selproduct?.SubImgDetail_set[5].imgDetail} alt="" />
                </SwiperSlide>
            </Swiper>
            <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
                <Nav.Link  onClick={()=>{ setTap(0) }} eventKey="link0">상품페이지</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{ setTap(1) }} eventKey="link1">REVIEW</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  onClick={()=>{ setTap(2) }} eventKey="link2">Q&A</Nav.Link>
            </Nav.Item>
            </Nav>
            <TabContent tap={tap}/>
            <div>
                <img src={selproduct?. imgPage} style={{width:"100%", marginTop:'30px'}} />
            </div>
        </div>
        {/* 오른쪽 시작==> */}
        <div className="sub_right">
            <div className="infoArea">
                <table>
                <tr>
                    <td>
                    <h4>{selproduct?.title}</h4>
                    </td>
                </tr>
                <tr>
                    <p className="price">{selproduct?.price}</p>
                </tr>
                <tr className="price_text">
                    <p className="sale_price">{selproduct?.sale_price}</p>
                    <p className="discount">{selproduct?.discount}</p>
                </tr>
                <div className="CodeMade">
                    <p style={{ height: "10px" }}>{selproduct?.itemNumber}</p>
                    <p style={{ height: "10px" }}>{selproduct?.made}</p>
                </div>
                </table>
            </div>
            <table className="itemDetail_img">
                <tr>
                <td>
                    <img src={selproduct?.optionImg[0].optionDetail} />
                    <img src={selproduct?.optionImg[1].optionDetail} />
                </td>
                </tr>
                <tr>
                <td className="optionText">
                    <span>DETAILS</span>
                    <span>EXCHANGE & RETURN</span>
                </td>
                </tr>
                <td className="size">
                <ul>
                    <li>
                    <a>WS</a>
                    </li>
                    <li>
                    <a>MW</a>
                    </li>
                </ul>
                </td>
            </table>

            <p style={{ fontSize: "13px", marginTop: "10px" }}>
                TOTAL <strong>0</strong>(0개)
            </p>
            <div className="infoBottom">
                <a>
                <button className="buybtn"
                color="success"
                onClick={() => {
                //  dispatch(addItem(  {id : 2,  imgurl : 'shoes1.jpg', name : 'Grey Yordan', count : 1}))

                dispatch(
                    addItem({
                    id: selproduct?.id ?? 0,
                    name: selproduct?.title ?? '',
                    imgurl: selproduct?.product_img?.replace('img/', '') ?? '',
                    count: 1,
                    })
                );
                }}
                >장바구니 담기</button>
                </a>

                <Link to="/cart">
                    <Button className='cartbtn'> 주문상품 확인하기 </Button>
                </Link>
            </div>

            <div className="naverbtn">
                <div className="npay_button">
                <div className="npay_text"></div>
                <div className="button_list">
                    <tr>
                    <td className="npay_btn_item1"></td>
                    <td className="npay_btn_item2">
                        <span className="zzim">찜</span>
                    </td>
                    </tr>
                </div>
                </div>
                <div className="npay_Event">
                <span style={{ color: "#00c05a", margin: "0 10px 0 0", fontSize:"12px" }}>
                    머니결제혜택
                </span>
                <span style={{ color: "#929294", margin: "0 10px 0 0",fontSize:"12px", width:"150px" }}>
                    최대 3%적립 + 소득공제
                </span>
                </div>
            </div>

            <div className="detail-open">
                <a className="buy_cart">ADD TO CART</a>
                <a className="buy_button">BUY NOW</a>
            </div>
        </div>
    </div>
    );
}


    function TabContent(props) {
    if (props.tap === 0) {
        return <div></div>;
    } else if (props.tap === 1) {
        return (
        <div className="reviewsWrap">
            {/* 리뷰 페이지 */}
            <div className="reviews_icontent">
                <div className="score">
                    <img src="/img/sub_page/star.png" className='star' style={{width:'55px'}}/>
                    <span>0.0</span>
                </div>
                <div className="writeButton">
                    <button>상품 리뷰 작성하기</button>
                </div>
            </div>
            <div className="reviews_rcontent">
                <ul className="score_filters">
                    <li className="score_filter">
                        <div className='score_title'>아주 좋아요</div>
                        <div className='score_gauge'></div>
                    </li>
                    <li className="score_filter">
                        <div className='score_title'>맘에 들어요</div>
                        <div className='score_gauge'></div>
                    </li>
                    <li className="score_filter">
                        <div className='score_title'>보통이에요</div>
                        <div className='score_gauge'></div>
                    </li>
                    <li className="score_filter">
                        <div className='score_title'>그냥 그래요</div>
                        <div className='score_gauge'></div>
                    </li>
                    <li className="score_filter">
                        <div className='score_title'>별로예요</div>
                        <div className='score_gauge'></div>
                    </li>
                </ul>
            </div>
            <p  className='reviewText'>
                <br></br>리뷰가 없습니다.<br></br>
                <strong>리뷰를 작성해 보세요!</strong>
            </p>
        </div>
        );


    } else if (props.tap === 2) {
        return(
            <div className='qAnda'>
                <table>
                    <tr>
                        <td className='qAnda_num'>1</td>
                        <td className='qAnda_title'>재고조회
                            <img  style={{padding:'7px'}} src='/img/sub_page/ico_lock.gif'/>
                        </td>
                        <td className='qAnda_name'>김**</td>
                        <td className='qAnda_date'>2023-11-20</td>
                    </tr>
                    <tr>
                    <td className='qAnda_num'>2</td>
                        <td className='qAnda_title'>반품/교환</td>
                        <td className='qAnda_name'>조**</td>
                        <td className='qAnda_date'>2023-11-28</td>
                    </tr>
                </table>
            </div>
        )
    }
    }

export default Detail;