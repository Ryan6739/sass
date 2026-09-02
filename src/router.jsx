import './index.scss';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Router(){
    return(
    <BrowserRouter>
    
      <Routes>

      <Route path ='/' element ={<App/>}/>
      <Route path ='/contato' element ={<Contato/>}/>

      </Routes>

    </BrowserRouter>

    );
}