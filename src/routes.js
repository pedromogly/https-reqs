import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Members from "./Pages/Members";

function RotasApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/>} />
                <Route path="/about" element={ <About/> } />
                <Route path="/macaco" element={ <Members/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RotasApp;