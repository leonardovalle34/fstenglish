import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Contatos from './components/contato';
import Teste from './components/testenivelacao';
import Trad from './components/traducao';


const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Main/>}/>
                <Route exact path='/contato' element={<Contatos/>}/>
                <Route exact path='/teste' element={<Teste/>}/>
                <Route exact path='/traducao' element={<Trad/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router