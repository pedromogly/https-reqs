import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>HOME</h1>
            <Link to="/macaco" className='butaum'>Macacos</Link>
            <Link to="/about" className='butaum'>About</Link>
        </div>
    )
}

export default Home;