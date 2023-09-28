import React from 'react';
import imgLogoMain from '../images/logo_main.png';
import { Link } from 'react-router-dom';
import "../style/signup.css"
function SignUp() {

    return (
        <form className="form">
            <div id="main_box">
                <div className="logo_box input-group mb-2">
                    <img
                        className="logo_img"
                        src={imgLogoMain}
                        alt="Logo"

                    />
                </div>
                <div className="input_box input-group mb-2" id="id_box">
                    <input
                        type="text"
                        name="username"
                        placeholder="이름"
                        className="form-control"
                        id="username"
                        aria-describedby="basic-addon2"
                        // Implement your validation function
                    />
                    <div className="check">
                        <div style={{ height: '10px' }}></div>
                        <i id="email_check" className="bx bx-x-circle"></i>
                    </div>
                    <span className="input-group-text" id="basic-addon2">
            <input
                type="button"
                className="btn"
                value="중복"
                 // Implement your double-check function
            />
          </span>
                </div>
                <div className="input_box input-group mb-2" id="email_box">
                    <input
                        type="text"
                        name="email"
                        placeholder="이메일"
                        className="form-control"
                        id="email"
                         // Implement your validation function
                    />
                </div>
                <div className="input_box input-group mb-2" id="pwd_box">
                    <input
                        type="text"
                        name="pwd"
                        placeholder="비밀번호"
                        className="form-control"
                        id="pwd"
                       // Implement your validation function
                    />
                </div>
                <div className="input_box input-group mb-2">
                    <input
                        type="submit"
                        value="회원가입"
                        className="btn btn-outline-danger su"
                        id="signUp_btn"
                    />
                </div>
                <div className="link_box input-group mb-2" id="link_box">
                    이미 가입하셨나요? <Link to="/login">로그인</Link>
                </div>
            </div>
        </form>
    );
}

export default SignUp;
