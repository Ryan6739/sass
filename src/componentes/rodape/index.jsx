import './index.scss';


export default function Rodape(props){
    
    return(
        <header className='comp-rodape' style={{backgroundColor: props.cor ?? "blue", color : props.cor ?? "black"}}>

         
                <h1 className='tit'>{props.titulo ?? "CABO"}</h1>
        </header>

    );
}