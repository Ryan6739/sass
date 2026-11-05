import './index.scss';
import { useState } from 'react';

export default function ProvaExAcai() {

    const [peq, setpeq] = useState(0);
    const [med, setmed] = useState(0);
    const [gran, setgran] = useState(0);

    const [quant, setquant] = useState(1);
    const [meia, setmeia] = useState();
    const [cup, setcup] = useState("");
    const [total, settotal] = useState('');


    function calcular() {

        let valor = 0;

        if(peq === 10 ){
            valor = quant * peq;
        }
        else if( med === 15){
            valor = quant * med;
        }
        else if( gran === 20){
            valor = quant * gran;
        }


        if(cup === "Cp50"){
            valor = valor * 0.5;
        }



        if(meia === true){
            valor = valor / 2;
        }

        settotal(valor);
    }




    return (
        <div className="prova-ex-acai">


            <h1>Prova Ex Acai</h1>



            <div className="td_provinha">


                <input type="checkbox" value={peq} onChange={(e)=>setpeq(e.target.checked)} />
                <p> pequeno (R$ 10,00) </p>


                <input type="checkbox" value={med} onChange={(e)=>setmed(e.target.checked)} />
                <p> médio (R$ 15,00) </p>

                <input type="checkbox" value={gran} onChange={(e)=>setgran(e.target.checked)} />
                <p> grande (R$ 20,00) </p>



                <div className="quantidade">

                    <label >Quantidade: </label>
                    <input type="number" min="1" value={quant} onChange={(e)=>setquant(e.target.value)}/>

                </div>


                <div className='meia'>
                    <label>Meia entrada: </label>
                    <input type="checkbox" checked={meia} onChange={(e)=>setmeia(e.target.checked)} />
                </div>

                <div className='cupom'>
                    <label>cupom: </label>
                    <input type="text" value={cup} onChange={(e)=>setcup(e.target.value)} />
                </div>

                <div>
                    <button onClick={calcular}>Calcular</button><br />

                    <p className='total'> O total do valor é R$ {total} </p>

                </div>


            </div>




        </div>

        
    );
}