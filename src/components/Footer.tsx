import React from "react";

const Footer = (): JSX.Element=>{
let foo ={
}
return(
    <>
    <div className="info" style={{borderTop:"1px solid #666"}}>
        <ul>
        <li className="info_title">INFORMATION</li>
        <li>ABOUT</li>
        <li>매장안내</li>
        <li>대리점 개설문의</li>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
        </ul>
        <ul>
        <li className="info_title">CUSTOMER SERVICE</li>
        <li>자주묻는질문</li>
        <li>배송</li>
        <li>교환/반품</li>
        <li>주문조회</li>
        </ul>
        <ul>
        <li className="info_title">SOCIAL</li>
        <li>INSTAGRAM</li>
        <li>FACEBOOK</li>
        <li>BLOG</li>
        <li>KAKAOTALK</li>
        <li>YOUTUBE</li>
        </ul>
        <ul>
        <li className="info_title">CS</li>
        <li>02-338-3316</li>
        <li>MON - FRI 09:30 ~ 18:00</li>
        <li>LUNCH TIME 12:00 ~ 13:00</li>
        <li>WEEKEND.HOLIDAY OFF</li>
        </ul>
        <ul className="last_info" style={{margin:"70px 0 0 300px"}}>
        <li>COMPANY : 커버낫</li>
        <li>OWNER : 주식회사 비케이브</li>
        <li>OFFICE : 02-338-3316</li>
        <li>BUSINESS NUMBER : 261-81-17293</li>
        <li>MAIL-ORDER LICENSE : 제 2020-서울마포-4143호</li>
        <li>ADDRESS : 04042 서울특별시 마포구 잔다리로 24(서교동, 서영빌딩)</li>
        <li>개인정보 보호 책임자 : 임승인(privacy@bcave.co.kr)</li>
        <li>대표이사 : 윤형석(HYUNGSEOK YUN)</li>
        <li>호스팅 서비스 사업자 : (주)카페24</li>
        </ul>
    </div>
    </>

);
};
export default Footer;
