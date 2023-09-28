import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import imgLogo from '../images/logo.png';
import imgLogoMain from '../images/logo_main.png';
import "../style/main.css"

const Header = () => {
    return (
        <header>
            <div>
                {/* Use Link to navigate to the Main.jsx component */}
                <Link to="/">
                    <img src={imgLogo} className="imgLogo" alt="Logo" />
                </Link>

                {/* Use Link to navigate to the Main.jsx component */}
                <Link to="/">
                    <img src={imgLogoMain} className="imgLogoMain" alt="Main Logo" />
                </Link>

                {/* Use Link to navigate to the LogIn component */}
                <Link to="/login">
                    <button className="logIn">로그인</button>
                </Link>

                {/* Use Link to navigate to the SignUp component */}
                <Link to="/signup">
                    <button className="signUp">회원가입</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
