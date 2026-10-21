import './index.scss';


export default function start(props){

    return(

        <div>

             <header>
                    <h1>{props.titulo ?? "Teste. 44"}</h1>
            </header>

    </div>

);
}