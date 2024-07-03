import '../Style.css'
function Contact() {
    return (
        <>
            <h1>김현지</h1>
            <h4>웹 개발자</h4>
            <a className="icon-box" href="https://github.com/KIMHYEONJI13" target="_blank" rel="noopener noreferrer">
                <li className="fab fa-github icon"></li>
            </a>
            {/* <a className="icon-box" href="https://~~.tistory.com" target="_blank" rel="noopener noreferrer">
            <li className="fas fa-blog icon"></li>
            </a> */}
            <a className="icon-box" href="mailto:wjk1310@naver.com">
                <li className="fas fa-envelope icon"></li>
            </a>
        </>
    );
}

export default Contact;