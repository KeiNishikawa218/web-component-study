import React from 'react';
import './App.css';
import {SimpleGreeting} from './lib/web-components/simple-greeting'
import {createComponent} from '@lit-labs/react';

export const MyElementComponent = createComponent(
  React,
  'simple-greeting',
  SimpleGreeting
);

function App() {
  return (
    <div className="App">
      <p>test</p>
      {/* <simple-greeting></simple-greeting> */}
      <MyElementComponent name="World"></MyElementComponent>
      <p>test2</p>
    </div>
  );
}

export default App;
