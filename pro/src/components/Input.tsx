import { type ChangeEvent } from "react";

type InputProps ={
  value:string;
  onChange:(event: ChangeEvent<HTMLInputElement>)=>void;
  placeholder?:string;
}

export default function Input({value,onChange,placeholder}: InputProps) {
  return <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />}