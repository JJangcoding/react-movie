import React from 'react';
import imgLogo from '../images/logo.png'
import "../style/login.css"
function LogIn() {
    const handleLogin = () => {
        // Implement your login logic here
        // You can access the email and password input values using React state or refs
        // Example: const email = emailRef.current.value;
        //          const password = passwordRef.current.value;
    };

    const handleKakaoLogin = () => {
        // Implement your Kakao login logic here
    };

    const handleNaverLogin = () => {
        // Implement your Naver login logic here
    };

    return (
        <form className="form">
            <div id="main_box">
                <div className="logo_box input-group mb-2">
                    <img
                        className="logo_img"
                    src={imgLogo} className="imgLogo" alt="Logo" />

                </div>
                <div className="input_box input-group mb-2" id="email_box">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="이메일"
                    />
                </div>
                <div className="input_box input-group mb-2" id="pwd_box">
                    <input
                        type="password"
                        name="pwd"
                        className="form-control"
                        placeholder="비밀번호"
                    />
                </div>
                <div className="input_box input-group mb-2">
                    <input
                        type="button"
                        name="button"
                        style={{
                            backgroundColor: '#7900ff',
                            color: 'white',
                            borderColor: '#7900ff',
                        }}
                        value="로그인"
                        className="btn btn-outline-danger"
                        onClick={handleLogin}
                    />
                </div>
                <div className="openApi_box input-group mb-2">
                    <input
                        type="button"
                        name="button"
                        style={{
                            backgroundColor: '#F7E600',
                            color: 'black',
                            borderColor: '#F7E600',
                        }}
                        value="카카오 간편로그인"
                        className="btn btn-outline-danger"
                        onClick={handleKakaoLogin}
                    />
                </div>

                <div className="openApi_box input-group mb-2">
                    <input
                        type="button"
                        name="button"
                        style={{
                            backgroundColor: '#2DB400',
                            color: 'black',
                            borderColor: '#F7E600',
                        }}
                        value="네이버 간편로그인"
                        className="btn btn-outline-danger"
                        onClick={handleNaverLogin}
                    />
                </div>

                {/* Uncomment the following lines if you want to display the "회원가입" link */}
                {/*<div>
          계정이 없으신가요? <a href="movie_mate_signUp_screen.do">회원가입</a>
        </div>*/}
            </div>
        </form>
    );
}

export default LogIn;
