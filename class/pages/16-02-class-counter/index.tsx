import {Component} from "react";

interface IState {
    count : number;
}
export default class CounterPage extends Component{
    state = {
        count : 0
    };

    onClickCounter = ()=> {
        console.log("카운터클릭")
        // 이 함수가 잘못인거라 실행이 안되는건지, 뭔지 찍어보는 과정 !! 
        console.log(this.state.count) 
        // 따로 setState안만들어도 컴포넌트 안에 내장되어있다
        // setstate도 객체이다 ! 
        this.setState((prev:IState)=> ({
            count:prev.count +1,
        }))
    }

    render(){
        return(
            <div>
                <div>현재카운트 : {this.state.count}</div>
                <button onClick={this.onClickCounter}>카운트올리기</button>
            </div>
        )

    }
}