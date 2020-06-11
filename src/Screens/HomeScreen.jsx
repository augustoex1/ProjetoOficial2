import React from 'react';
import data from '../data'
import { Link } from 'react-router-dom';

function HomeScreen (props) {
    return  <ul className="produtos">
    {
      data.produtos.map( produto => 
        <li key={produto._id}>
      <div className="produto">
      <Link to={'/produtos/' + produto._id}>
          <img className="produto-imagem" src={produto.imagem} alt="produto"/>

          </Link>
          <div className= "produto-nome">
              <Link to={'/produtos/' + produto._id}>{produto.nome}</Link>
          </div>
          <div className="produto-marca">{produto.marca}</div>    
          <div className="produto-preco">${produto.preco}</div>
      </div>
  </li>)                         
}            
 </ul>

}

export default HomeScreen;