
import {Card, CardBody, CardTitle, Label, Input, FormFeedback, FormText, FormGroup, Form, Button} from 'reactstrap';
import React from "react";
import Header from "../header";
import "./style.css"

const Contatos = ()=>{
    return(
        <>
            <Header/>
            <Card className="my-2 main">
                <div className="father"> 
                    <CardBody>
                    <CardTitle tag="h5" className="tit">
                        <strong>Contato</strong>
                    </CardTitle>
                    <div className='mainfatherform'>
                        
                            <form action="https://api.staticforms.xyz/submit" method="POST">
                                <input type="hidden" name="accessKey" value="a1ed6830-5330-47a2-b98b-7783ecdac8ba"></input>
                                <input type="hidden" name="redirectTo" value="http://fstenglish.vercel.app/contato"></input>    
                                <FormGroup>
                                    <Label for="Email">
                                    Email
                                    </Label>
                                    <Input placeholder='seuemail@aqui.com.br'  type="email" name='email'/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="nome">
                                        Nome
                                        </Label>
                                        <Input placeholder='Nome' type='text' name="name"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="phone">
                                        Telefone
                                        </Label>
                                        <Input className='fone' type='number' name="phone" placeholder='(XX)99999999'/>
                                    </FormGroup>
                                    
                                    
                                    <FormGroup className="position-relative">
                                        <textarea className='text' placeholder='Escreva sua mensagem!' name='message'>

                                        </textarea>
                                    </FormGroup>

                                    <div className='divbtn'>
                                        <Button
                                            color="primary"
                                            className='btn'
                                        >
                                            Enviar
                                        </Button>
                                    </div>
                            </form>
                        
                    </div>
                    </CardBody>
                </div>
            </Card>
        </>
    )
}

export default Contatos