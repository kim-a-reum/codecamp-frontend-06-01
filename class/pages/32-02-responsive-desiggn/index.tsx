import styled from "@emotion/styled"


const Wrapper = styled.div`
    width: 1000px;
    height: 1000px;
    background-color: pink;

    @media (min-width: 768px) and  (max-width: 991px) {
        width: 80%;
        height: 500px;
        background-color: #f1fb2c;

    }
    @media (max-width: 760px) {
        width: 70%;
        height: 100px;
        background-color: #6c0404;
        /* display: none; */
}

`
export default function ResponsiveDesignPage(){

    return <Wrapper>상자</Wrapper>

}