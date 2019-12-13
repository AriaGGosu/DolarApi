import React from 'react';
import './App.scss';
import MyApp from './components';
import { Grid } from 'react-flexbox-grid';
function App() {
  return (
    <div className="App">
        <MyApp/>
    </div>
  );
}


App.displayName = 'App';

export default App;
