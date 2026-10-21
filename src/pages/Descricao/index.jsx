import './index.scss';
import { useState } from 'react';


export default function Descricao(){

    const [titu, settitu] = useState('Titulo')

    function mudar(e){
        let novo = e.target.value;
        settitu(novo)
    }



// ___________________________ Com Button __________________________________________
    
    const [desc, setdesc] = useState('Título')
    const [desc1, setdesc1] = useState('Título')


    function alterar(){
        setdesc(desc1)
    }
    

    function pegar(e){
        let novo = e.target.value;
        setdesc1(novo);
    };



// ___________________________ COR __________________________________________

    const [cor, setcor] = useState("#00ffff");

    function Acor(e){
        let carne = e.target.value;
        setcor(carne)
    }


// __________________________ Calculdora ________________________________

    const [n1, setn1] = useState("")
    const [n2, setn2] = useState("")
    const [resp, setresp] = useState("")


    function somar(){
        let soma = Number(n1) + Number(n2)
        setresp(soma);
    }

        function subtrair(){
        let soma = Number(n1) - Number(n2)
        setresp(soma);
    }

        function multiplicar(){
        let soma = Number(n1) * Number(n2)
        setresp(soma);
    }

        function dividir(){
        let soma = Number(n1) / Number(n2)
        setresp(soma);
    }

    function potencia(){
        let soma = Number(n1)** Number(n2)
        setresp(soma);
    }



    return(
        
    <div className='p_descri' style={{backgroundColor: cor}}>

        <div style={{backgroundColor: cor}}>

        <h1>{titu}</h1> 

        <input maxLength={10} onChange={mudar} type="text" placeholder='digite algo'/>



        {/*______________________ Com Button ______________________ */}
    

        <h1>{desc}</h1>

        <input onChange={pegar} maxLength={10} type="text" placeholder='Digite algo'/>

        <button onClick={alterar}> trocar </button> <br/>



        {/*______________________ Color _____________________________*/}

        <h1>A cor É : {cor}</h1>

        <input className='corBarra' type="color" value={cor} onChange={Acor}/>




        {/*______________________ Calculdora ___________________________*/}

        <section>

            <div>


                <h2>Calculadora</h2>

                <div className='numeros'>

                    <input className='i1' type="text" value={n1} onChange={ (e) =>setn1(e.target.value)} />

                    <input className='i2' type="text" onChange={ (e) =>setn2(e.target.value)}  />

                    <div> = {resp}</div>

                    

            </div> 

                <div className='acoes'>

                    <button onClick={somar}>Soma</button>

                    <button onClick={subtrair}>subtrair</button>

                    <button onClick={multiplicar}>multiplicar</button>


            </div>

            <div className='acoes'>

                    <button onClick={dividir}>dividir </button>

                    <button onClick={potencia}>potencia</button>

            </div>




            </div>

        </section>


        </div>

    </div>


    );
}