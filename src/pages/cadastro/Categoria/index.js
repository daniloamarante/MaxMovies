import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
   
    const valoresIniciais = {
        nome:'',
        descricao: '',
        cor: ''
    };
   
    const [Categorias, setCategorias] = useState([]);  
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(chave, valor){
    setValues({
        ...values,
       [chave]: valor,

    }); 
    
   }

   function handleChange(evento){
    setValue(evento.target.getAttribute('name'),
    evento.target.value);
    
  }

  return (
      <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form  onSubmit={function handleSubmit(evento){
          evento.preventDefault();
          setCategorias([
            ...Categorias,  
            values
          ]);

          setValues({valoresIniciais});
      }}>
          <div>
              
          </div>
          <label>
          Nome da Categoria:
          <input
            type="text"
            value={values.nome}
            name='nome'
            onChange= {handleChange}
          />
        </label>
          <div>
          <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            name='descricao'
            onChange= {handleChange}
          />
        </label>
          </div>
          <label>
          Cor:
          <input
            type="color"
            value={values.cor}
            name='cor'
            onChange= {handleChange}
          />
        </label>
          <div>
              
          </div>

        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
          {Categorias.map((categoria,indice)=>{
              return(
                  <li key={`${categoria} ${indice}`}>
                      {categoria.nome}
                  </li>
              )

          })}
      </ul>  


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;