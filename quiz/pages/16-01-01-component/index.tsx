import {useEffect,useState } from "react";
import { useRouter } from "next/router";

export default function CounterPage() {
    const router = useRouter();
    const [ischange,setIschange] = useState(false);

const onClickChange = () => {
    setIschange(true);
    };
    
const onClickMove = () => {
        router.push("/");
        
    };
useEffect(() => {
    alert("Changed!")
    
    },[ischange]);

useEffect(() => {
    alert("Rendered!");
    
    return () => {
        alert("bye!")
    };
}, []);

    return (
    <div>
        <button onClick={onClickChange} >변경</button>
        <button onClick={onClickMove} >이동</button>
    </div>
    );
}
