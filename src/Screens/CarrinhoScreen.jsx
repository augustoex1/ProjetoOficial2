import React, {useState} from 'react'
import axios from 'axios'
import '../index.css'

import { Form, Button } from 'react-bootstrap'

function Carrinho() {
    const [cep, setCep] = useState({})
    const [nomeInput, setNomeInput] = useState('')
    const [cartaoInput, setCartaoInput] = useState('')
    const [codigoInput, setCodigoInput] = useState('')
    const [dataInput, setDataInput] = useState('')
    

    const [cepInput, setCepInput] = useState('')

    const lista = JSON.parse(localStorage.getItem('carrinho') ? `[${localStorage.getItem('carrinho')}]` : "")
    let total = 0

    function buscarCep(){
        axios.get(`http://localhost:3001/cep/${cepInput}`)
        .then( (result)=> {
            setCep(result.data)
            console.log(result.data)

        })
        .catch( (err)=> {
            console.log(err)
        })
    }

    function terminar(){
        let txt = `${nomeInput}\n${cartaoInput}\n${codigoInput}\n${dataInput}` 
        
        localStorage.setItem('carrinho', "[]")
        alert(txt)
    
    }

    return <div>

        {lista.map(produto => {
            total += produto.preco
            return (
                // <Form>
                    // <Row>
                        <div className="produto" style={{ marginBottom: '100px' }}>

                            <img className="produto-imagem" src={produto.imagem} alt="produto" />

                            <div className="produto-nome">{produto.nome} </div>
                            <div className="produto-marca">{produto.marca}</div>
                            <div className="produto-preco">${produto.preco}</div>
                        </div>
                    // </Row>
                // </Form>
            )
        })}
  
  <div style={{width: '300px', fontSize: '15px'}}>
            <Form>
            <Form.Group controlId="formBasicPassword">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui!" onChange={(e)=> setNomeInput(e.target.value)}/>
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Número do cartão</Form.Label>
                    <Form.Control type="number" placeholder="Digite aqui!" onChange={(e)=> setCartaoInput(e.target.value)}/>
                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Codigo de Segurança</Form.Label>
                    <Form.Control type="number" placeholder="Digite aqui!" onChange={(e)=> setCodigoInput(e.target.value)}/>
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Data de Validade</Form.Label>
                    <Form.Control type="date" placeholder="Digite aqui!" onChange={(e)=> setDataInput(e.target.value)} />
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" onClick={()=> terminar()} type="submit">
                    ENVIAR
                </Button>
            </Form>
        </div>

        <div style={{width: '300px', fontSize:'15px'}}>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>CEP</Form.Label>
                <Form.Control type="text" placeholder="Digite aqui!" onChange={(e)=> setCepInput(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={()=> buscarCep()}>
                BUSCAR
            </Button>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Estado: {cep.state}</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Cidade: {cep.city}</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Lorgadouro: {cep.neighborhood}</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Rua: {cep.street}</Form.Label>
            </Form.Group>
        </div>
    </div>
}

export default Carrinho