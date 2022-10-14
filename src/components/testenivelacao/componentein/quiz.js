import { render } from '@testing-library/react';
import {React, useState, useEffect }from 'react';
import {Card, Button} from 'reactstrap';
import perguntas from "./perguntas.json"
import "./style.css"



const Quiz = ()=>{
    const [score , setScore] = useState(0)
    const [rounds, setRounds] = useState(0)
    const questions = perguntas
    const [letter, setLetter] = useState(Math.floor(Math.random() * (8 - 0) + 0));   
   

    const finalResult = (a)=>{//funçao que soma score do quiz
        if(a == true){
            setScore(newScore => newScore + 1)
        }
    }
    const next = ()=>{//funçao que acha a opçao certa
        
            let questionsMarked = document.getElementsByName("quiz")
            let answer ;
            questionsMarked.forEach((el)=>{
                if(el.checked == true && el.value == questions[letter].certa){
                    answer = true
                    el.checked = false
                }else{
                    el.checked = false
                }
            })
            finalResult(answer)
            setLetter(prevLetter => prevLetter + 1)
            setRounds(prevRound => prevRound + 1)
            
        }
    
    const msg = (scr)=>{//funçao que manda a msg final
        if(scr.score < 5){
            return (
                <div>
                    <h1 className='Tituloquiz'>Você obteve uma nota menor que 5 pontos do total de 10 pontos</h1>
                    <p className='pres'>
                        Parabêns pela iniciativa de estudar inglês, seu nível de inglês é basico e para isso é necessario se envolver com a lingua inglesa diariamente, solicite um contato de nossos consultores através do botão de whats app que entraremos em contato e te ajudaremos a alcançar seus objetivos!  
                    </p>
                </div>
            )
        }else if(scr.score > 5 && scr.score <= 7){
            return(
                <div>
                    <h1 className='Tituloquiz'>Você obteve {score} pontos do total de 10 pontos</h1>
                    <p className='pres'>
                        Parabêns pela iniciativa de estudar inglês, seu nível de ingles é intermediário e para isso é necessario se envolver com a lingua inglesa diariamente, solicite um contato de nossos consultores através do botão de whats app que entraremos em contato e te ajudaremos a alcançar seus objetivos!  
                    </p>
                </div>
            )
                
        }else if(scr.score > 7){
            return(
                <div>
                    <h1 className='Tituloquiz'>Você obteve {score} pontos do total de 10 pontos</h1>
                    <p className='pres'>
                        Parabêns pela iniciativa de estudar inglês, seu nível de ingles é avançado, e para que você nao perca seu bom nível de inglês é importante que você pratique conversaçao com frequencia, solicite um contato de nossos consultores através do botão de whats app que entraremos em contato e te ajudaremos a alcançar seus objetivos!  
                    </p>
                </div>   
            ) 
        }                 
    }
    
    const rend = ()=>{
        if(rounds >= 10){//final
            return(
                <div className='father'>
                    <Card className="mainComp">
                        <div>
                            {msg({score})}
                        </div>              
                    </Card>
                </div>
            )
            
        }else if(rounds < 10){//renderiza as perguntas 
            return(
                <Card className='mainquiz'>
                    <h1>Descubra seu nível de inglês</h1>
                    <p><strong>{questions[letter].Titulo}</strong></p>
                    <label htmlFor="quiz" >
                        <div className='question'>
                            <input type='radio' value="a" name="quiz"/>{questions[letter].a}
                        </div>
                        <div className='question'>
                            <input type='radio' value="b" name="quiz"/>{questions[letter].b}
                        </div>
                        <div className='question'>
                            <input type='radio' value="c" name="quiz"/>{questions[letter].c}
                        </div>
                        <div className='question'>
                            <input type='radio' value="d" name="quiz"/>{questions[letter].d}
                        </div>
                    </label>           
                    <Button className="btngo"color='primary' onClick={()=>next()}>></Button>
                </Card>
            )
        }
    }

    

    useEffect(()=>{
        
    })

    return (
        <> 
            {rend()}
        </>
    )
}   

export default Quiz

