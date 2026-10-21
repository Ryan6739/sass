import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import Cabecalho from '../../componentes/cabecalho/index.jsx';


export default function Conneccao(){

    const [cep, setcep] = useState('');
    const [endereco, setendereco] = useState();


        async function buscarcep() {
            let url = 
        `https://viacep.com.br/ws/${cep}/json/`;

            let resp = await axios.get(url);
            let dados = resp.data;
            let msg = `${dados.logradouro} - ${dados.bairro} - ${dados.localidade} - ${dados.uf}`;
                setendereco(msg);
        }


    return(
        <div className='coneccao_t'>

            <Cabecalho titulo={"Seu Cep"}/>

        <div className='end'>

            

            <input type="text" value={cep} onChange={(e)=>setcep(e.target.value)}/>
            <button onClick={buscarcep}>Buscar</button>
            <p> {endereco} </p>

        </div>

        </div>
    );
}