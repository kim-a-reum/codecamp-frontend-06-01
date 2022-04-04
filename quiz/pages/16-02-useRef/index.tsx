
import {useEffect, useRef } from "react";


export default function FocusPage(){
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus();
      }, []);

      


    
        return(
            <div>
                <input type = "password" ref= {inputRef}/>

            </div>
        )

    
}