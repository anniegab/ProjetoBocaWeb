import './App.css'
import {Component} from 'react';
import ListaOdas from './components/ListaOdas.js';
import Busca from './components/Busca.js';
import Cabecalho from './components/Cabecalho.js';
import Rodape from './components/Rodape.js';

class App extends Component{
    
    state = {
        busca: '',
        odas: []
    }
    
    componentDidMount(){
        this.carregaODAs();
    }

    carregaODAs(){
        const {busca} = this.state;
        fetch('http://www.bocaweb.com.br/apibocaweb?nome='+busca)
        .then(response => response.json())
        .then(odas => this.setState({odas}))
    }

    buscaODA = (evento) => {
        this.setState({busca: evento.target.value});
        this.carregaODAs()
    }

    render(){
        const {busca, odas} = this.state;
        return (
            <>
            <Cabecalho/>
            <section className = "container">
                <Busca valor={this.state.busca} handleMudanca={this.buscaODA}/>
                <ListaOdas odas={odas}/>
            </section>
            <Rodape/>
            </>
        )
    }
}

export default App;