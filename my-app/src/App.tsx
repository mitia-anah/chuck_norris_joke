import React from 'react';
import './App.css';
import DrawJokeButton from './component/DrawJokeButton';
import { GlobalProvider } from './component/GlobalState'
import Header from './component/Header';
import styled from 'styled-components'
import Impersonate from './component/Impersonate';
// import RandomJokes from './component/RandomJokes';

const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding-top: 98px;
  padding-bottom: 98px;
`;

const MainScreen = styled.div`
  background-color: #fff;
  width: 555px;
  margin:auto;
  height: 704px;
  padding-block-start: 48px;
  padding-block-end: 72px;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
`;


function App() {
  return (
    <GlobalProvider>
      <Wrapper className="App">
          <MainScreen>
            <Header />
            <Impersonate/>
          </MainScreen>
      </Wrapper>
    </GlobalProvider>
  );
}

export default App;
