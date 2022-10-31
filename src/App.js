import logo from './logo.svg';
import './App.css';
import React from 'react';
import './components/Button'



function App() {
  const saludo= () => {
    console.log("hola")

  }
  const mensaje= () => {
    console.log("mensaje")

  }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo!
        </p>
        <Button className='boton' onClick={saludo} text="Click me"/>
        
       <p className="parrafo">hola como estas todo eeeeeeee ? </p>

       <Button className='boton' onClick={mensaje} text="mensaje"/>
      </header>
    </div>
  );
}

export default App;
