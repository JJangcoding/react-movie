import React from "react";
import "../style/footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="info_icon_box">
                <div className="info_box">
                    <div className="info_box_top">
                        <a
                            href="https://watcha.com/legals/agreement"
                            className="footer_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            서비스 이용약관 |
                        </a>
                        <a
                            href="https://watcha.com/legals/privacy"
                            className="footer_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            개인정보 처리방침 |
                        </a>
                        <a
                            href="https://watcha.team/"
                            className="footer_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            회사 안내
                        </a>
                    </div>
                    <div className="dropdown">
                       
                    </div>
                    <br />
                    <div>
                        고객센터 |{" "}
                        <a
                            href="https://help.pedia.watcha.co.kr/hc/ko"
                            className="footer_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            cs@moviemate.co.kr,
                        </a>{" "}
                        02-515-9985 <br />
                        <span>광고 문의 | ad_sales@moviemate.com</span> <br /> 제휴 및 대외
                        협력 |{" "}
                        <a
                            href="https://watcha.team/contact"
                            className="footer_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://moviemate.team/contact
                        </a>
                    </div>
                    <br />
                    <div className="info_box_bottom">
                        <div>
                            주식회사 무비메이트 | 대표 장현상 | 서울특별시 서초구 강남대로 343
                            신덕빌딩 3층
                        </div>
                        <div>사업자 등록 번호 211-88-66013</div>
                        <div className="last">
                            movie mate © 2022 by MOVIE_MATE, Inc. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
