import './index.scss';
import { useState } from 'react';

export default function Contar(){

    const [rr, setrr] = useState(0);

    function menos(){
        setrr(rr-1)
    }

    function mais(){
        setrr(rr + 1)
    }



    return(
        <div>
            
            <h1>Contagem</h1>


        <div className='rr'>

            <button onClick={menos}>-</button>

                {rr}

            <button onClick={mais}>+</button>

        </div>


        </div>
    );
}