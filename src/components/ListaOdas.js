import {Component} from 'react';
import Oda from './Oda.js';

class ListaOdas extends Component{
    render (){
        return (
        <div className = 'lista'>
                <p> {this.props.odas.length} this.props.odas </p>
                    {this.props.odas.map(oda => (
                        <Oda oda={oda} key={oda._id}/>
                    ))}
                </div>
        );
    }
}

export default ListaOdas;