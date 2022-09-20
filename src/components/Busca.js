import {Component} from 'react';

class Busca extends Component{
    render(){
        return(
            <div className = 'busca'>
                    <input
                        name='busca'
                        type='text'
                        value={this.props.valor}
                        placeholder='O que deseja buscar'
                        onChange={this.props.handleMudanca}
                    />
                </div>
        );
    }
}

export default Busca;