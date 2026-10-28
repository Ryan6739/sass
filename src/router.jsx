import './index.scss';

import App from './pages/app/App.jsx';
import Contato from './pages/contato';
import Eventos from './pages/eventos';
import Burro from './pages/usuário';
import Contar from './pages/contador';
import F404 from './pages/notFound';
import Descricao from './pages/Descricao';
import Pagina from './pages/pagina';
import Conneccao from './pages/Connecao_api/index.jsx';
import Ingressos from './pages/ingressos/index.jsx'
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
      <Route path ='/descricao' element ={<Descricao/>}/>
      <Route path ='/pagina' element ={<Pagina/>}/>
      <Route path ='/conecAPI' element ={<Conneccao/>}/>
      <Route path ='/ingresso' element = {<Ingressos/>}/>
      ''


      </Routes>

    </BrowserRouter>

    );
}