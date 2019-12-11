import { hot } from 'react-hot-loader/root';
import React from 'react';
import logo from './logo.svg';
import { NODE_ENV } from 'constants/env';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import {apolloClient} from 'config/configApolloClient'
function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit {NODE_ENV}</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default hot(App);
