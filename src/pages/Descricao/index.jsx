import './index.scss';
import { useState } from 'react';


export default function Descricao(){

    const [titu, settitu] = useState('Titulo')

    function mudar(e){
        let novo = e.target.value;
        settitu(novo)
    }


// ------------------------- Com Button ------------------------------------
    
    const [desc, setdesc] = useState('Título')
    const [desc1, setdesc1] = useState('Título')


    function alterar(){
        setdesc(desc1)
    }
    

    function pegar(e){
        let novo = e.target.value;
        setdesc1(novo);
    };

// -------------------------- COR -------------------------------------------

    const [Cor, setCor] = useState();

    function Acor(e){
        let carne = e.target.value;
        setCor(carne)
    }




    return(
        
        <div className='p_descri' style={{backgroundColor: Acor}}>

        <h1>{titu}</h1> 

        <input maxLength={10} onChange={mudar} type="text" placeholder='digite algo'/>


        {/*------------------------ Com Button ----------------------- */}
    

        <h1>{desc}</h1>

        <input onChange={pegar} maxLength={10} type="text" placeholder='Digite algo'/>

        <button onClick={alterar}> trocar </button> <br/>



        {/*----------------------- Color -------------------------------*/}

        <h1>A cor É : {}</h1>

        <input type="color" />







    </div>


    );
}