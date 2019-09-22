import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './screens/product-list';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProductList />
      {/*   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Cool test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */}
    </div>
  );
}

export default App;
