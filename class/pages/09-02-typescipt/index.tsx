export default function TypescriptPage(){
    let aaa = "안녕하세요 "//자동으로 처음에 들어간 형식으로 타입을 추론함 ! 
                        // 그래서 얘는 문자열로 인식하고 string 밖에 못넣게 하는거야 /
                        // 이것을 타입추론이라고 한다 ~ 타입스크립트 똑똑해 ~ 
    aaa = 3 

    let bbb : string = "반갑습니다" //타입명시

    let ccc : string 
    ccc = "반가워요"   //문자타입
    ccc = 3

    let ddd : number = 10 //숫자타입 
    ddd = asdf

    let eee : boolean = true  //불린타입
    eee = false
    eee = "false" //true로 작동함 

    let fff: number[] = [1,2,3,4,5,"안녕"]
    
    let ggg : string[] = ["철수","영희","훈이",13]

    let hhh:(number | string) [] = [1,2,3,4,5,"안녕하세요"] //또는을 | 하나로 써줄것 

    //객체타입
    //저절로 타입이 추론이 됨 
    interface IProfile {
        name: string
        age: string | number
        school:string
        hobby?: string //있어도 되고 없어도 된다는 뜻 
    }
    let profile: IProfile = {
        name: "철수",
        age : 8,
        school : "다람쥐 초등학교 ", 
        
    }

    profile.age = "8살"
    profile.school = 123

    const add = (money1: number, money2: number, unit:string): string =>{
        return money1 + money2 + unit

    }
    const result = add(1000,2000,"원")

    


    return <div>ㅌㅏ입스크립트 연습하기 ! </div>
}