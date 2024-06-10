import '../components/Component.css'

function Content2({ date, link, title, subTitle, content }) {
    return (
        <>
            <h4 className="title">{date}</h4>
            <a href='#'>{link}</a>
            <h4 className="title">{title}</h4>
            <h5 className="subtitle">{subTitle}</h5>
            <p>
                {content}
            </p>
        </>
    )
}

export default Content2;