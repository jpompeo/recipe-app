import React from 'react';
import { PageHeader, Logo } from '../styles/Header';
import Styled from 'styled-components';
import '../styles/App.css';
import SearchBar from './SearchBar';

function App() {
  return (
    <div id="app-container">
    <PageHeader>
      <Logo><span>Custom</span> Cookbook</Logo>
    </PageHeader>
    <SearchBar/>
      </div>
  );
}

export default App;
