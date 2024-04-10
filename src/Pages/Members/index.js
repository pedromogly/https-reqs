import { Link } from "react-router-dom";

function Members() {
    return(
        <div>
            <h1>MACACOS Aloprados</h1>
            <div className="botoes-container">
                <Link to="/" className='butaum'>Home</Link>
                <Link to="/about" className='butaum'>About</Link>
            </div>
        </div>
    )
}

export default Members;