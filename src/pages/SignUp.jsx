import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgLogoMain from '../images/logo_main.png';
import '../style/signup.css';

function SignUp() {
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
    const navigate = useNavigate();

    const handleNameBlur = () => {
        const enteredName = name.current.value;
        setIsNameValid(enteredName.trim() !== '');
    };

    const handleEmailBlur = () => {
        const enteredEmail = email.current.value;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        setIsEmailValid(emailRegex.test(enteredEmail));
    };

    const handlePasswordBlur = () => {
        const enteredPassword = password.current.value;
        setIsPasswordValid(enteredPassword.length >= 8);
    };

    const handleCheckDuplicate = () => {
        const enteredEmail = email.current.value;
        // 실제 중복 체크 로직은 서버와 통신하여 처리

        // 예제에서는 무조건 중복으로 설정
        setIsEmailDuplicate(true);
        alert('이미 사용 중인 이메일입니다.');
    };

    const handleClick = () => {
        handleNameBlur();
        handleEmailBlur();
        handlePasswordBlur();

        if (isNameValid && isEmailValid && isPasswordValid && !isEmailDuplicate) {
            const enteredName = name.current.value;
            const enteredEmail = email.current.value;
            const enteredPassword = password.current.value;

            // 실제 회원가입 처리 코드를 추가
            // ...

            localStorage.setItem('name', enteredName);
            localStorage.setItem('password', enteredPassword);
            localStorage.setItem('email', enteredEmail);
            alert('계정이 성공적으로 생성되었습니다!');
            navigate('/');
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
                    <div className={`input_box input-group mb-2 ${isNameValid ? '' : 'has-error'}`} id="id_box">
                        <input
                            type="text"
                            name="username"
                            placeholder="이름"
                            className="form-control"
                            id="username"
                            aria-describedby="basic-addon2"
                            ref={name}
                            onBlur={handleNameBlur}
                        />
                        {!isNameValid && <div className="error-message">이름을 입력하세요.</div>}
                    </div>
                    <div className={`input_box input-group mb-2 ${isEmailValid ? '' : 'has-error'}`} id="email_box">
                        <input
                            type="text"
                            name="email"
                            placeholder="이메일"
                            className="form-control"
                            id="email"
                            ref={email}
                            onBlur={handleEmailBlur}
                        />
                        {!isEmailValid && <div className="error-message">올바른 이메일을 입력하세요.</div>}
                    </div>
                    <div className={`input_box input-group mb-2 ${isPasswordValid ? '' : 'has-error'}`} id="pwd_box">
                        <input
                            type="password"
                            name="pwd"
                            placeholder="비밀번호"
                            className="form-control"
                            id="pwd"
                            ref={password}
                            onBlur={handlePasswordBlur}
                        />
                        {!isPasswordValid && <div className="error-message">비밀번호는 8자 이상이어야 합니다.</div>}
                    </div>
                    <div className="input_box input-group mb-2">
                        <input
                            type="button"
                            value="중복 체크"
                            className="btn btn-outline-primary su"
                            id="checkDuplicate_btn"
                            onClick={handleCheckDuplicate}
                        />
                    </div>
                    <div className="input_box input-group mb-2">
                        <input
                            type="button"
                            value="회원가입"
                            className="btn btn-outline-danger su"
                            id="signUp_btn"
                            onClick={handleClick}
                        />
                    </div>
                    <div className="link_box input-group mb-2" id="link_box">
                        이미 가입하셨나요? <Link to="/login">로그인</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
