import {useParams} from 'react-router-dom';

function Produto(){
    const { id } = useParams();

    return(
        <div>
            <h2>PRODUTO TAL</h2>
            <span>
                MEU PRODUTO É {id}
            </span>
        </div>
    )
}

export default Produto;