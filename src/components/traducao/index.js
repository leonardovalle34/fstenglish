import React from "react";
import Header from "../header";
import "./style.css"
const Trad = ()=>{
    return(
        <>
            <Header/>
            <div className="maintrans">
                <h1>Traduções</h1>
                <p><strong>A Fast English também oferece o serviço de traduções de:</strong></p>
                <ul>
                    <li>Traduções Juramentadas</li>
                    <li>Artigos científicos</li>
                    <li>Currículos</li>
                    <li>Filmes e vídeos</li>
                </ul>
                <p>Para maiores informações entre em contato conosco através do botão de whats app abaixo e solicite um orçamento!</p>
            </div>
        </>
    )
}

export default Trad