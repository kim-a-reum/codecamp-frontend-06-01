// 데코레이터는 뭘까요?1

function qqq(aaaa: any){
    console.log("===================")
    console.log(aaaa)
    console.log("===================")

}
@qqq
class Product{

}

///qqq는 함수고 함수의 인자로 class가 들어갔다 ! 