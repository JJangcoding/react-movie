import React from "react";
import { Link } from "react-router-dom";
import imgLogo from '../images/logo.png';
import imgLogoMain from '../images/logo_main.png';
import "../style/main.css"

const Header = ({ isLoggedIn, handleLogout }) => {
    const handleLogoutClick = () => {
        // 로그아웃 버튼 클릭 시 로그아웃 처리
        handleLogout();
        // 로그아웃 시 로컬 스토리지에서 로그인 정보 삭제
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <header>
            <div>
                <Link to="/">
                    <img src={imgLogo} className="imgLogo" alt="Logo"/>
                </Link>
                <Link to="/">
                    <img src={imgLogoMain} className="imgLogoMain" alt="Main Logo"/>
                </Link>
                {isLoggedIn ? (
                    <div className="input_box input-group mb-2">
                        <button
                            className="logOut"
                            id="logout"
                            onClick={handleLogoutClick}
                        >
                            로그아웃
                        </button>
                    </div>
                ) : (
                    <div className="input_box input-group mb-2">
                        <Link to="/login">
                            <button className="logIn">로그인</button>
                        </Link>
                        <Link to="/signup">
                            <button className="signUp">회원가입</button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
