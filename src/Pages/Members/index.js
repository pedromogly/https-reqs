import { Link } from "react-router-dom";

function Members() {
    return(
        <div>
            <h1>MACACOS</h1>
            <Link to="/" className='butaum'>Home</Link>
            <Link to="/about" className='butaum'>About</Link>
        </div>
    )
}

export default Members;