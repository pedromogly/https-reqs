import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="botoes-component">
            <h1>OLA</h1>
            <Link to="/" className='butaum'>HOME</Link>
            <Link to="/macaco" className='butaum'>Macascos</Link>
            <Link to="/about" className='butaum'>Macacoco</Link>
            <Link to="/produto/:id" className="butaum">Produtos</Link>
        </header>
    )
}

export default Header;