import React from 'react';
import "../css/Login.css";

function Login(): JSX.Element {
    return (
        <div className="container">
            <div className="Login_title_wrap">
            <h2 className="sub_title">Login</h2>
            <div className="member_join">
                <div className="join_cont">
                <div className="login_wrap">
                    <div className="inp_group">
                    <p>
                        <label>이메일 아이디</label>
                        <input
                        type="email"
                        placeholder="Email 아이디를 @까지 정확하게 입력하세요"
                        />
                    </p>
                    <p className="mt20">
                        <label>비밀번호</label>
                        <input
                        type="email"
                        placeholder="영문+숫자+특수문자 조합 8~16자리를 입력해주세요"
                        />
                    </p>
                    </div>
                    <div className="btn_group">
                    <button>로그인</button>
                    <ul className="link" style={{}}>
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className='new_join_wrap' style={{border:"10px solid #ccc", borderWidth:"1px 0 1px 0"}}>
                <div className="join_email">
                    <p className="tit_join_email">
                        지금가입하면<strong>10%할인 쿠폰+웰컴 쿠폰팩</strong>증정
                    </p>
                    <div className="join_opt">
                        <div ><a>이메일로 가입하기</a></div>
                    </div>
                </div>
                <div className='join_sns'>
                    <p className='tit_join_sns'>SNS계정으로 COVERNAT을 이용해 보세요</p>
                    <div className='join_opt_sns'>
                        <span>카카오로 시작하기</span>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Login;