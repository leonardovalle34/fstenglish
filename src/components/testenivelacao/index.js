
import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Card, } from "reactstrap";
import Header from "../header";
import Quiz from "./componentein/quiz"
import "./style.css"

const Teste = ()=>{
    const [start, setStart] = useState(false)
    let navigate = useNavigate()
    const go = ()=>{
        navigate = ("/teste")
        setStart(newStart => newStart = true)
    } 
    
    return (
        <>
            <Header/>
            <div className='father'>
                <Card className="mainComp">
                    <Quiz/>                    
                </Card>
            </div>
        </>
    )
}

export default Teste