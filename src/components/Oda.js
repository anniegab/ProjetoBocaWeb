import {Component} from 'react';

class Oda extends Component{
    render(){
        return(
            <div key={this.props.oda._id}>
                            <h1>nome: {this.props.oda.nome}</h1>
                            <p> usuario: {this.props.oda.usuario} </p>
                            <p> descricao: {this.props.oda.descricao} </p>
                        </div>
        );
    }
}

export default Oda;