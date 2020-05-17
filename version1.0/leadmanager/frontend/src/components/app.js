import React ,{Componenet} from 'react';
import ReactDOM from 'react-dom';

class App extends Componenet{
    render(){
        return<h1>React App</h1>
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));