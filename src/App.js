import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { dummy } from "./movieDummy";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp"; // Import the SignUp component
import Detail from "./pages/Detail";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={ // Use 'element' instead of 'render' for React Router v6
                            <div className="container">
                                <div className="movie-grid">
                                    {dummy.Data[0].Result.map((item) => (
                                        <Main title={item.title} posters={item.posters} DOCID={item.DOCID} />
                                    ))}
                                </div>
                            </div>
                        }
                    />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} /> {/* Route to the SignUp component */}
                    <Route path="/:DOCID" element={<Detail/>}/>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
