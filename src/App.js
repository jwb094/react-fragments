import React,{Component,Fragment}from 'react';
import logo from './logo.svg';
import './App.css';

const Temp = (props) =>{
  return (
<Fragment>
{
  props.greeting === 'hi'? 
  <Fragment>&lt;div&gt;{props.greeting}&lt;/div&gt;</Fragment>:props.greeting
}
</Fragment>
  )
}

class  App extends Component {
  
  render(){
    return (
    <div className="App">
     <Temp greeting="hi"/>
    </div>
  );
}
}

export default App;
