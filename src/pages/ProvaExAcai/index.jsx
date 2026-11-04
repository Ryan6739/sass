import './index.scss';
import { useState } from 'react';



const preco_peq = 10;
const preco_med = 15;
const preco_grd = 20;

export default function ProvaExAcai (){

    const [quantidade, setquantidade]= useState(1);
    const [tamanho, settamanho] = useState(false);
    const [cupom, setcupom] = useState('');
    const [total, settotal] = useState(''); 

    function vv(){

        let valor = 0;
        
        if(tamanho==="pequeno"){
            valor = quantidade * preco_peq;
            
        } else if(tamanho==="medio"){
            valor = quantidade * preco_med;

        } else if(tamanho==="grande"){
            valor = quantidade * preco_grd;
        };
        
        if(cupom==="ACAI10"){
            valor = valor * 0.9;
        };


        settotal(valor);
    }
    



    
        return(
        <div className='td_provinha'>

            

            <div className='mm'>
                

                <h1>Venda de Acai!!!!!!!!</h1>


            </div>
                
                <div className='mm1'> 
                    <label>Quantidade:</label>
                    <input 
                      type="number"   value={quantidade}
                onChange={(e)=>setquantidade(e.target.value)}   />

                </div>

            
                   <div className='buda'>
                     

                     <input type="checkbox" name='pequeno' value={"pequeno"}
                      onClick={(e)=>settamanho(e.target.checked)}/>
                        <label>pequeno</label>


                    

                     <input type="checkbox" name='medio' value={"medio"}
                      onClick={(e)=>settamanho(e.target.checked)}/>
                        <label>medio</label>

                      

                    

                     <input type="checkbox" name='grande' value={"grande"}
                      onClick={(e)=>settamanho(e.target.checked)}/>
                        <label>grande </label>



                   </div>

                   <div className='xx'>


                    <label>Cupom: </label>
                    <input type="text" value={cupom} onChange={(e)=>setcupom(e.target.value)} />
        

                     </div>



                          <div className='ggu'>

                            <button onClick={vv}>Calcular Total</button> 

                            <p className='lm'> O total do valor é R$ {total} </p> 

                        </div>
        </div>

    );

}