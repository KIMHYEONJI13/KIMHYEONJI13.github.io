// import '../components/Component.css'
import Post from "../components/Post";

function Portfolio() {

    const posts = [
        { id: 1
            , title: 'Ketchup'
            , subTitle: '그룹웨어 프로그램'
            , date: '2024.03.26~2024.06.01'
            , content: 'Content of Post 1' 
        },
        { id: 2
            , title: 'RevelUP'
            , subTitle: '리사이클링, 업사이클링 제품을 위한 크라우드펀딩 프로그램'
            , date: '2024.02.15~2024.03.20'
            , content: 'Content of Post 2' 
        },
        // 추가 포스트들
    ];

    return (

        <div>

            <div className="post-list">
                {posts.map(post => (
                    <Post
                        key={post.id}
                        title={post.title}
                        subTitle={post.subTitle}
                        date={post.date} link={post.link}
                        ontent={post.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;