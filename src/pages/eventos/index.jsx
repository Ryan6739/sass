import './index.scss';

function eventos() {

        function alerta (){
        alert("Alterou o input")
      }

        function mouse(){
          alert("Passou o mouse")
        }

        
        
        function novovalor (e){
          let novovalor = e.target.value
          alert("o valor do input foi alterado para  " + novovalor)
        }

  return (
    <div className="mn">
      
      <div className='começo'>

        <h1>Questionário</h1>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt eos iusto impedit doloribus veritatis ad aspernatur ex error commodi iure adipisci officiis necessitatibus dolores eius at, quae suscipit deleniti.</p>

        <div>

          <p>Qual seu nome?</p>

        <input onChange={novovalor} type="text" placeholder='digite seu nome'/>

          <p>Me fale um anime bom</p>

          <input onMouseMove={mouse} type="text" placeholder='One Piece' />
          
          <p>Me fale um anime bom</p>

          <input onChange={alerta} type="text" placeholder='One Piece' /><br/><br/>

          <label>Escolha: </label>

          <select>

          <option>opção 1</option>
          <option>opção 2</option>
          <option>opção 3</option>

          </select>


        </div>

      </div>
    

    </div>
  );
}

export default eventos;
