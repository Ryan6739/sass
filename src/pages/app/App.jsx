import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="ps_App">
    
    <h1>Links das Páginas</h1>

    <div className='oi'> </div>

    <Link to={'/contato'}/>

    </div>
  );
}

export default App;
