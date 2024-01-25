import logo from './logo.svg';
import './App.css';
import { Entreprise } from './Entreprise';
import { Student } from './Student';
import { classe } from './data';
import { useState } from 'react';
import { Count } from './Count';
import { Formulaire } from './Formulaire';
import { Articles } from './Articles';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Articles />
        {/* <Formulaire /> */}
        {/* <Count /> */}
        {/* {isAdmin ? <h1>Je suis admin</h1> : <h1>Pas admin</h1>}
        {classe.map((student, index) => 
          <Student 
            key={index} 
            data={student}
            campus="Marseille"
          />
        )} */}
      </header>
    </div>
  );
}

export default App;
