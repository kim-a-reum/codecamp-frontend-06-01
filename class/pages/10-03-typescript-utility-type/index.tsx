export default function TypescriptPage(){


    interface IProfile {
        name:  string
        age : number
        school : string
        hobby?: string

    }
    //1. Pick 타입
    type Mytype1 = Pick<IProfile,"name" |"age">
    //pick은 원하는것만 골라내는 유틸리티 타입이다 

    //2. Omit 타입
    type Mytype2 = Omit<IProfile,"school">
    //제외할것만 빼고 

    //3. Partial 타입
    type Mytype3 = Partial<IProfile>
    //모두 ?붙여버려~ 

    //4.Required 타입
    type Mytype4 = Required<IProfile>
    //?붙은애들 다 빼버려 ~ 

    //5.Record 타입 // union 타입이다 
    type ZZZ = "aaa" | "qqq" | "rrr"
    //얘는 string도 아니고 number도 아니고 ...
    // let apple : ZZZ
    // apple = "aaa"
    //이렇게 타입을 정해준다
     //키와 벨류가 생성된다 
    type Mytype5 = Record<ZZZ,IProfile> // 

    //추가(선언병합) type과 interface 차이점 

    interface IProfile {
        candy : number
    }
    //interface고 두개일때 저절로 하나로 합쳐진다 
    let profile : IProfile
    profile = {
        age : 10,
        candy : 3,
        name : "cjftn",
        school : "df"
    }

    return <div>ㅌㅏ입스크립트 연습하기 ! </div>
}