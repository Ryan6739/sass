import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../componentes/cabecalho';


const preco_ing = 30;


export default function Ingressos (){

    const [quantidade, setquantidade]= useState(1);
    const [meiaent, setmeiaent] = useState();
    const[cupom, setcupom] = useState("");
    const [total, settotal] = useState('');

    function riy (){

        let valor = quantidade * preco_ing;
        if(meiaent===true){
            valor = valor /2;
        }
        if (cupom ==="quero50"){
            valor = valor * 0.5;
        }
            settotal(valor)

    }



    return(
        <div className='vsc'>


        <div className='fy'>
            <h1>ingressos á venda!</h1>

            <div className='fyp'>
                <label>Quantidade:</label>
                <input 
                  type="number" min="0"   value={quantidade}
            onChange={(e)=>setquantidade(e.target.value)}   />


            </div>
        </div>  
                <div className='vrl'> 
                    <label>meia entrada:</label>

                    <input type='checkbox' value={meiaent}
                onChange={(e)=>setmeiaent(e.target.checked)} />

                </div>
                
                <div className='ryy'>
                    <label>cupom:</label>
                    <input type="text" value={cupom}
                    onChange={(e)=>setcupom(e.target.value)} />
                </div>

                <div className='rii'>
                    
                    <button onClick={riy}>Calcular</button>
                </div> 
                
                <div>
                    <p className='tot'> O total do valor é R$ {total} </p>

                </div>
            
    </div>
    );
}