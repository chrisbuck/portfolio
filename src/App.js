import React from 'react';
import AppRouter from './routers/AppRouter';
//import logo from './logo.svg';
import './styles/App.css';
import Header from './layout/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <section className="App-body">
          <AppRouter />
        </section>
    </div>
  );
}

export default App;