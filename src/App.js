import React from 'react';
import AppRouter from './routers/AppRouter';
//import logo from './logo.svg';
import './styles/App.css';
import Header from './layout/Header/Header';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url("./images/light-blue.jpg")'}}>
      <Header />
        <section className="App-body">
        <h2>Test</h2>
          <AppRouter />
        </section>
    </div>
  );
}

export default App;