import {Component, createRef} from "react";
import Router from "next/router";


interface IState {
    count : number;
}
export default class CounterPage extends Component{
    inputRef = createRef<HTMLInputElement>()

    state = {
        count : 0
    };
    
    componentDidMount(){
        console.log("마운트됨!")
        // 포커스 깜박
        this.inputRef.current?.focus();
    }

    componentDidUpdate(){
        console.log("수정되고 다시 그려짐 ! ")
    }

    componentWillUnmount(){
        console.log("컴포넌트 사라짐 !")
        // 채팅방 나가기 
        // 여기다가 나가기 api요청을 하면 밑에 안만들어도 된다 
        // 꼭 나가기 버튼을 안눌러도 여기다가 클릭하면 api요청이 되어서 
        // 백엔드에 채팅방을 나갔다고 알려줄수 있다 
        // 뭘 클릭했던 상관없이 채팅방 ui가 사라지면 알려주는거임
    }

    // onClick채팅방나가기(){
    //     api요청!! 
    // }

    onClickCounter = ()=> {
        console.log("카운터클릭")
        // 이 함수가 잘못인거라 실행이 안되는건지, 뭔지 찍어보는 과정 !! 
        console.log(this.state.count) 
        // 따로 setstate안만들어도 컴포넌트 안에 내장되어있다
        // setstate도 객체이다 ! 
        this.setState((prev:IState)=> ({
            count:prev.count +1,
        }))
    }

    onClickMove(){
        Router.push("/");

    }

    render(){
        return(
            <div>
                <input type = "text" ref= {this.inputRef}/>
                <div>현재카운트 : {this.state.count}</div>
                <button onClick={this.onClickCounter}>카운트올리기</button>
                <button onClick={this.onClickMove}> 나가기! </button>
            </div>
        )

    }
}