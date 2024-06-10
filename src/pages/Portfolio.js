import Content2 from "../components/Content2";
import Title from "../components/Title";
import '../components/Component.css'

function Portfolio() {

    const content = (
        <>

        </>
    );

    return (
        <div className="projects">
            <div className="title-box">
                <Title title="Projects" />
            </div>

            <Content2
                date="2024.03.26~2024.06.01"
                link="https://github.com/orgs/devs-plan/repositories"
                title="Ketchup"
                subTitle="그룹웨어 프로그램"
                content={content}
            />

            <Content2
                date="2024.02.15~2024.03.20"
                link="https://github.com/reValuper/revelup"
                title="RevelUP"
                subTitle="리사이클링, 업사이클링 제품을 위한 크라우드펀딩 프로그램"
                content={content}
            />

            <Content2
                date="2024.01.04~2024.01.16"
                link="https://github.com/miniTeamCoraft/coraft"
                title="Coraft"
                subTitle="Java 콘솔프로그램"
                content={content}
            />

           
        </div>
    );
}

export default Portfolio;