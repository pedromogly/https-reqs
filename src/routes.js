import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Members from "./Pages/Members";
import Header from "./components/header/Header";
import Erro from "./Pages/Erro";
import Produto from "./components/Produtos";


function RotasApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/>} />
                <Route path="/about" element={ <About/> } />
                <Route path="/macaco" element={ <Members/>} />
                <Route path="/produto/:id" element={<Produto/>} />

                <Route path="*" element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RotasApp;