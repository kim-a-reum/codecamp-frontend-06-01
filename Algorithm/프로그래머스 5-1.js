function solution(participant, completion) {
    const answer = {};
    //answer라는 객체 안에 선수의 이름과 몇명인지를 각각 넣으려는 작업 
    for(let i =0; i<participant.length; i++){
        // 키값으로 선수들의 이름이 들어가고 
        answer [participant[i] ]=== undefined 
               ? answer [ participant[i]] =1 
                // 해당하는 키값이 없으니까(언디파인이면) 1의 값으로 넣어준다 
               : answer [participant[i]]++
                // 해당하는 사람이 이미 들어가 있으니까 값을 1개씩 증가시켜주겠다 
               
    }
    for(i=0; i <completion.length; i++){
        //참가자수가 완주자수에 있다면 하나씩 줄여나가겠다
        if(answer[completion[i]]){ //걔가 참가자수에 있다면
            answer[completion[i]]--;//하나씩 줄이자 
        }
    } //이렇게 줄였을때 벨류가 0이 아닌애는 참가했는데 완주를 못한 사람이 됨
    for(let key in answer){ //for~in 사용해서 객체 찾는중
        if(answer[key] !== 0){
            return key
        } 
    }
}