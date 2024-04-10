import { Link } from 'react-router-dom';
import '../../App.css';

function Home() {
    return(
        <div>
            <h1>HOME - filho das trevas</h1>
            <h3>Oba magroove</h3>
            <div className='botoes-container'>
                <Link to="/macaco" className='butaum g1'>Macacos</Link>
                <Link to="/about" className='butaum g2'>About</Link>
                <Link to="/produto/55" className='butaum'>Produto 55</Link>
            </div>
        </div>
    )
}

export default Home;