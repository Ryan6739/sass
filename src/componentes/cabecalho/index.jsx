import './index.scss';


export default function Cabecalho(props){
    
    return(
        <header className='comp-cabecalho' style={{backgroundColor: props.cor ?? "blue", color : props.cor ?? "black"}}>

         
                <h1 className='tit'>{props.titulo ?? "Estudar né"}</h1>
        </header>

    );
}