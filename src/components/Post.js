const Post = ({ title, subTitle, date, content }) => {
    return (
        <div className="post">
            <h1>{title}</h1>
            <h4>{subTitle}</h4>
            <h5>{date}</h5>
            <p>{content}</p>
        </div>
    );
};

export default Post; 