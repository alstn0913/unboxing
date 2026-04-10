import { useState } from "react"

function Info(props:any){
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    )
}

export default function Product(){

    function handleClick(){
        setCount(count + 1);
    }
    
    const [count, setCount] = useState(0);

    return (
        <div>
            <Info name="Product 1" price="$19.99"/>
            <Info name="Product 2" price="$29.99"/>
            <Info name="Product 3" price="$39.99"/>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}