import './index.scss';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/index.jsx';
import Eventos from './pages/eventos/index.jsx';
import Burro from './pages/usuário/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Router(){
    return(
    <BrowserRouter>
    
      <Routes>

      <Route path ='/' element ={<App/>}/>
      <Route path ='/contato' element ={<Contato/>}/>
      <Route path ='/Eventos' element ={<Eventos/>}/>
      <Route path ='/Burro' element ={<Burro/>}/>


      </Routes>

    </BrowserRouter>

    );
}