import './index.scss';

export default function usuario(){

    function alterar(r){
        let nome = r.target.value
        alert("O funcionário alterou o nome para: " + nome)
    }

    

    return(
        <div>

            <div className="cadastro">

                <h1> Faça seu Cadatro </h1>

                <div className='rest'>

                    <p>nome do Funcionário:</p>

                    <input onChange={alterar} type="text" placeholder='Digite aqui'/><br/>

                    <p>Qual seu departamento?</p>

                    <select onChange={alterar}>
                        <option >Administração</option>
                        <option >RH</option>
                        <option >Financeiro</option>
                        <option >Marketing</option>
                        <option >TI</option>
                    </select>

                </div>

            </div>

        </div>
    );
}