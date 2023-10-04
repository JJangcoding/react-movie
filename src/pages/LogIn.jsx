import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgLogoMain from '../images/logo_main.png';
import '../style/login.css';

function LogIn({ handleLogin }) {
    const email = useRef();
    const password = useRef();

    const [show, setShow] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const localEmail = localStorage.getItem('email');

    const navigate = useNavigate();

    useEffect(() => {
        if (localEmail) {
            setShow(true);
        }
    }, []);

    const handleLoginFormSubmit = () => {
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
            alert('로그인 성공!');
            handleLogin();
            navigate('/');
        } else {
            alert('로그인 실패. 올바른 이메일과 비밀번호를 입력하세요.');
        }
    };

    return (
        <div>
            <main />
            <form className="form">
                <div id="main_box">
                    <div className="logo_box input-group mb-2">
                        <img className="logo_img" src={imgLogoMain} alt="로고" />
                    </div>
                    <div className="input_box input-group mb-2" id="email_box">
                        <input
                            type="text"
                            name="email"
                            placeholder="이메일"
                            className="form-control"
                            id="email"
                            ref={email}
                        />
                    </div>
                    <div className="input_box input-group mb-2" id="pwd_box">
                        <input
                            type="password"
                            name="pwd"
                            placeholder="비밀번호"
                            className="form-control"
                            id="pwd"
                            ref={password}
                        />
                    </div>
                    <div className="input_box input-group mb-2">
                        <input
                            type="button"
                            value="로그인"
                            className="btn btn-outline-danger su"
                            id="login_btn"
                            onClick={handleLoginFormSubmit}
                        />
                    </div>
                    <div className="link_box input-group mb-2" id="link_box">
                        아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LogIn;
