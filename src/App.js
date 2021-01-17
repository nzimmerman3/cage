import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      {/* <input type="checkbox" />
      <p>Item 1</p>
      <input type="checkbox" />
      <p>Item 2</p>
      <input type="checkbox" />
      <p>Item 3</p>
      <input type="checkbox" />
      <p>Item 4</p> */}
    </div>
  );
}

export default App;
