import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
export const Signup=()=>{
    const[phone,setPhone]=useState("");
    const[name,setName] = useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();

    return <div>
        <Heading label={"Signup"}/>
        <InputBox label={"Phone Number"} placeholder={"9898989898"} onChange={(e)=>{
            setPhone(e.target.value);
        }}/>
        <InputBox label={"Name"} placeholder={"Jhon Doe"} onChange={(e)=>{
            setName(e.target.value);
        }}/>
        <InputBox label={"Password"} placeholder={"abcd123"} onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <div>
            <Button label={"Signup"} onClick={async()=>{
               try {
                const response = await axios.post("http://localhost:3000/t/signup",{
                 phone,
                 name,
                 password
                })
                localStorage.setItem("token",response.data.token);
                navigate("/home");
               } catch (e) {
                console.log(e);
               }
            }}
            />
        </div>

    </div>
    


}