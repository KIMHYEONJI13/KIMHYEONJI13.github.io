import { NavLink } from "react-router-dom";

function Main() {

    return (
        <>
            <section id="header">
                <header>
                    <span className="image avatar"><img src="" alt="" /></span>
                    <h1 id="logo">KimHyeonji</h1>
                </header>
                <div id="nav">
                    <ul>
                        <li><a href="#one" className="active">Introduction</a></li>
                        <li><a href="#two">SkillSet</a></li>
                        <li><a href="#three">Portfolio</a></li>
                        <li><a href="#five">Contact</a></li>
                    </ul>
                </div>
            </section>

            <div id="wrapper">
                <div id="main">
                    <section id="one">
                        <div className="container">
                            <header className="major">
                                <h2>Introduction</h2>
                                <h3>
                                    안녕하세요.&nbsp; <br />
                                    저는 신입 풀스택 개발자<br />
                                    김현지입니다.
                                </h3>
                            </header>
                            <p>
                                <h2>"8주 30분 런데이(달리기)"</h2>
                                꾸준하게 공부하고 발전하는 것을 좋아합니다.
                                <br />
                                <br />
                                현재 신입 풀스택 개발자로 구직중입니다.<br />
                            </p>
                            <hr />
                            <header className="major">
                                <h4>Overall Experiences</h4>
                                <h5>React.js와 Springboot를 활용한 자바 풀스택 개발자과정</h5>
                                <p>2023.12. - 2024.06.</p>
                                <p5>KDT 과정으로 React와 Springboot를 활용하여 프로젝트를 개발 하였습니다.</p5>
                                <hr />
                            </header>
                        </div>
                    </section>


                    <section id="two">
                        <div className="container">
                            <h3>SkillSet</h3>
                            <p>사용하는 언어 및 프레임워크</p>
                            <ul className="feature-icons">
                                <li className="icon solid fa-code">JAVA</li>
                                <li className="icon solid fa-code">Spring</li>
                                <li className="icon solid fa-code">JPA</li>
                                <li className="icon solid fa-code">QueryDsl</li>
                                <li className="icon solid fa-code">MySQL</li>
                                <li className="icon solid fa-code">React</li>
                                <li className="icon solid fa-code">JavaScript</li>
                                <li className="icon solid fa-code">HTML</li>
                                <li className="icon solid fa-code">CSS</li>
                            </ul>
                            <p>개발 도구</p>
                            <ul className="feature-icons">
                                <li className="icon solid fa-bolt">IntelliJ</li>
                                <li className="icon solid fa-bolt">GitHub</li>
                            </ul>
                        </div>
                    </section>

                    <section id="three">
                        <div className="container">
                            <h3>Portfolio</h3>
                            <div className="features">
                                <article>
                                    <a href="https://github.com/tunkcalb/donggam" className="image"><img src="images/donggam.png"
                                        alt="" /></a>
                                    <div className="inner">
                                        <a href="https://github.com/tunkcalb/donggam">
                                            <h4>그룹웨어 KetchUp</h4>
                                            <p>

                                            </p>
                                        </a>
                                    </div>
                                </article>
                                <article>
                                    <a href="https://github.com/tunkcalb/finball" className="image"><img src="images/finball.png"
                                        alt="" /></a>
                                    <div className="inner">
                                        <a href="https://github.com/tunkcalb/finball">
                                            <h4>리사이클링&업사이클링 제품만을 취급하는 크라우드 펀딩</h4>
                                            <p>

                                            </p>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>


                    <section id="five" text-align="center">
                        <div className="container">
                            <h3>Contact Me</h3>
                            <ul className="icons">
                                <li>Phone : 010 - 4942 - 8768</li>
                                <br />
                                <li>Email : davithjk1310@gmail.com</li>
                                <br />
                                <li>
                                    Github :
                                    <a href="https://github.com/KIMHYEONJI13">https://github.com/KIMHYEONJI13</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <section id="footer">
                    <div className="container">
                        <ul className="copyright">
                            <li>&copy; Untitled. All rights reserved.</li>
                            <li style={{color: "black"}}>
                                이 사이트는 포트폴리오 용도로 제작하였으며 상업적인 용도로
                                사용하지 않음을 밝힙니다.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>

    );
}

export default Main;