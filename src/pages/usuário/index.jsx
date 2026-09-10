import './index.scss';

export default function usuario(){

    function alterar(r){
        let nome = r.target.value
        alert("O funcionário alterou o nome para: " + nome)
    }


    function Entrou(){
        alert("O Mouse entrou na área!!")
    }

        function Saiu(){
        alert("O Mouse saiu da área!!")
    }
    

    function cadastrar(){
        alert("Funcionário cadastrado com sucesso!")
    }

    return(
        <div>

            <div className="cadastro">

                <h1> Faça seu Cadatro </h1>

                <div className='rest'>

                    <h3>Nome do Funcionário:</h3>

                    <input onChange={alterar} type="text" placeholder='Digite aqui'/><br/>

{/* ---------------------------------- Departamento --------------------------------------------------- */}

                    <h3>departamento: </h3>

                    <select onChange={alterar}>

                        <option >Administração</option>
                        <option >RH</option>
                        <option >Financeiro</option>
                        <option >Marketing</option>
                        <option >TI</option>

                    </select>

{/* ---------------------------------------------- Tipo  de Funcionário -------------------------------- */}

                    <h3>tipo de funcionário: </h3>

                    <select onChange={alterar}>

                        <option>Efetivo</option>
                        <option>Temporário</option>
                        <option>Estagiário</option>
                        <option>Jovem Aprendiz</option>

                    </select><br/> <br/>

{/* ----------------------------------- Passar o Mouse ------------------------*/}

                    <div onMouseEnter={Entrou} onMouseLeave={Saiu} 
                    className='caixa'>

                        <h1>Passe o Mouse Aqui</h1>

                    </div><br/><br/>

    
{/* --------------------------------- Cadastrar   ----------------------------- */}

                    <button onClick={cadastrar}>
                        Cadastrar
                    </button>


                </div>

            </div>

        </div>
    );
}