import Content1 from "../components/Content1";
import Title from "../components/Title";

function Introduce() {

    const content = (
        <>
            안녕하세요 저는 김현지입니다.
        </>
    )



    return (
        <>
            <div className="title-box">
                <Title title="Introduce" />
            </div>
            <Content1 content={content} />
        </>
    );
}

export default Introduce;