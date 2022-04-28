import  Head from 'next/head'

export default function OpengraphPage(){

    return(
        <div>
            <Head> 
                {/* 메타태그는 내 사이트를 알릴때 사용한다  */}
                {/* og는 오픈그래프큐엘을 의미한다  */}
                <meta property='og:title' content='나만의 제목이다 ' />
                <meta property='og: description' content='졸면 때린다는 내용'/>
                <meta property='og: image' content='../../루피기영이.png'/>
            </Head>
            <h1>오픈그래프 연습 페이지</h1>
        </div>
    )
}