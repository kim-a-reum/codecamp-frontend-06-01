// 1.HOF - 일반타입 

function firstFun1(arg1: string){
    return function secondFunc1(arg2: number): [string,number]{
        return [arg1, arg2]
    }
}
const result1 = firstFun1("영희")(8)

// 2.HOF - any타입

function firstFun2(arg1: any){
    return function secondFunc1(arg2: any): [any,any]{
        return [arg1, arg2]
    }
}
const result2 = firstFun2("영희")(8)


// 3. HOF - generic 타입
function firstFun3<T>(arg1: T){
    return function secondFunc1<U>(arg2: U): [T,U]{
        return [arg1, arg2]
    }
}
const result3 = firstFun3("영희")(8)

// 4. HOF - generic타입(화살표함수)
const firstFun4 = <T>(arg1: T)=>{
    return const secondFunc1 = <U>(arg2: U): [T,U]=>{
        return [arg1, arg2]
    }
}
const result4 = firstFun4("영희")(8)

// 이렇게 바꿀수 있다

const firstFun4 = <T>(arg1: T)=> <U>(arg2: U): [T,U]=>{
        return [arg1, arg2]
    }

const result4 = firstFun4("영희")(8)

// 5. HOF - generic타입(컴포넌트에 응용해보기 - hoc)
const withAuth = <C>(Component: C)=> <P>(props: P): [C,P]=>{
    return [Component, props]
}

const result5 = withAuth("Bbb")({aaa: "철수"})

