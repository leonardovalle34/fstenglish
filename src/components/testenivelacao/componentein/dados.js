import {React,useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import {Card, CardBody, CardTitle, Label, Input, FormFeedback, FormText, FormGroup, Form, Button} from 'reactstrap';
import "./style.css"

const Dados = ()=>{
       
    return(
        <>
                <div>
                    <Card className="my-2 main mainpaps">
                        <div className="father"> 
                            <CardBody>
                                <div className='mainfatherform'>
                                    <form >                                        
                                        <FormGroup>
                                            <Label for="Email">
                                            Email
                                            </Label>
                                            <Input placeholder='seuemail@aqui.com.br'  type="email" name='email' />
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
                                                <Input className='fone' type='number' name="telefone" placeholder='(XX)99999999' />
                                        </FormGroup>
                                        <div>
                                            <Button
                                                id='btn'
                                                color="primary"
                                            >
                                                Enviar
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </CardBody>
                        </div>
                    </Card>
                </div>
        </>
    )
}
export default Dados