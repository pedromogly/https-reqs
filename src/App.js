import React,{useState, useEffect} from 'react';

//sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutricao, setNutri] = useState([]);
  
  useEffect(()=>{
    /*
    function conectarApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch (url)
      .then((resposta)=>resposta.json())
      .then((nutricaoMacaco)=>{
        console.log(nutricaoMacaco);
        setNutri(nutricaoMacaco);
      })

    }
    conectarApi();
    */
    async function conectartApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      const options = {
        method: 'GET'
      }
      let macaco = 'macaco';
      
      try {
        const resposta = await fetch(url, options, macaco);
        const resultado = await resposta.json();
        console.log(resultado);
        setNutri(resultado);
      } catch {
        console.log('ERRO');
      }
    }
    conectartApi();

  }, []);

  return (
    <div className="App">
      <h1>Macaco Nutricoes</h1>
      {nutricao.map((item)=>{
        return(
          <div key={item.id}>
            <h5>{item.titulo}</h5>
            <img className='macaco' src={item.capa} alt=""/>
            <p>{item.subtitulo}</p>
            <a href='#' className='butaum'>ACESSAR</a>
          </div>
        )
      })}
    </div>
  );
}

export default App;
