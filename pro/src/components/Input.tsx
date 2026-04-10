import {useState} from "react";


export default function Input(){
    const [text, setText] = useState("");

    function handleChange(event:any){
        setText(event.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange}/>
            <p>{text}</p>
        </div>
    )
} 