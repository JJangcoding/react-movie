import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { dummy } from "./movieDummy";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Detail from "./pages/Detail";

function App() {
    // 초기 로그인 상태를 로컬 스토리지에서 가져옵니다.
    const initialIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

    const handleLogin = () => {
        setIsLoggedIn(true);
        // 로그인 상태를 로컬 스토리지에 저장
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // 로그아웃 상태를 로컬 스토리지에서 삭제
        localStorage.removeItem('isLoggedIn');
    };

    useEffect(() => {
        // 페이지가 로드될 때마다 로그인 상태를 확인하고 업데이트
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(storedIsLoggedIn);
    }, []);

    return (
        <div className="App">
            <Router>
                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <div className="container">
                                <div className="movie-grid">
                                    {dummy.Data[0].Result.map((item) => (
                                        <Main title={item.title} posters={item.posters} DOCID={item.DOCID} />
                                    ))}
                                </div>
                            </div>
                        }
                    />
                    <Route path="/login" element={<LogIn isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/:DOCID" element={<Detail />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
