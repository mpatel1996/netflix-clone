import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1> Clever Programmers</h1>
      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl = {requests.fetchTrending}/>
      {/* <Row title="Originals 2" /> */}
      
    </div>
    
  ); 
}

export default App;
