import './index.scss';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/index.jsx';
import Eventos from './pages/eventos/index.jsx';
import Burro from './pages/usuário/index.jsx';
import Contar from './pages/contador/index.jsx';
import F404 from './pages/notFound/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Router(){
    return(
    <BrowserRouter>
    
      <Routes>

      <Route path ='/' element ={<App/>}/>
      <Route path ='/contato' element ={<Contato/>}/>
      <Route path ='/eventos' element ={<Eventos/>}/>
      <Route path ='/burro' element ={<Burro/>}/>
      <Route path ='/cont' element ={<Contar/>}/>
      <Route path ='/F404' element ={<F404/>}/> 


      </Routes>

    </BrowserRouter>

    );
}