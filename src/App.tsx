import React from 'react';
import './App.css';
import data from './data';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductsScreen';
import CarrinhoScreen from './Screens/CarrinhoScreen'

// declare global {
//     var carrinho: any;
//  }

function App() {
     
const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open")
}
 const closeMenu = () => {
  document.querySelector(".sidebar")?.classList.remove("open")
 }

  return (
      <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick= {openMenu}>
                &#9776;
            </button>
            <Link to="/" >Mercadinho</Link>        
        </div>
           <div className="header-link" style={{fontSize: '30px'}}>
           <a href="/carrinho">CARRINHO</a>
          </div>
          </header>
           <aside className="sidebar">
               <h3>Mercadinho Categorias</h3>
               <button className="sidebar-close-button" onClick={closeMenu}>x</button> 
              <ul>
                  <li>
                      <a href="index.html">Alimentos</a>
                  </li>
              </ul>
           </aside>
              <main className="main">
                  <div className="content">
                      
                      <Route path="/produtos/:_id" component={ProductScreen} />
                      <Route path="/" exact={true} component={HomeScreen}/>
                      <Route path='/carrinho' component={CarrinhoScreen}/> 
                
                 
              </div>

           </main>
           <footer className="footer">
               O mais barato é aqui !
           </footer>

  </div>
  </BrowserRouter>
  );
}

export default App;
