import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer';

import './style.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);