import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="ps_App">
    
    <h1>Links das Páginas</h1>


    <div className='oi'> 

    <Link to='/contato'>    <h1> P.Contato </h1>    </Link>
    <Link to='/eventos'>    <h1> P.Eventos </h1>    </Link>
    <Link to='/burro'>      <h1> P.Burro </h1>      </Link>
    <Link to='/cont'>       <h1> P.Cont </h1>       </Link>
    <Link to='/F404'>       <h1> P.F404 </h1>       </Link>
    <Link to='/descricao'>  <h1> P.Descricao </h1>  </Link>
    <Link to='/pagina'>     <h1> P.pagina </h1>     </Link>
    <Link to='/conecAPI'>     <h1> P.1ConecAPI </h1>     </Link>
    <Link to='/ingresso'>     <h1> P.ingreso </h1>     </Link>
  
  </div>




</div>
  );
}

export default App;
