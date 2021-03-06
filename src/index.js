import React from 'react';
import ReactDOM from 'react-dom';
// import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultilpeCustomHooks } from './components/03-examples/MultilpeCustomHooks'; //App con las quotes
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { MemoHook } from './components/06-memos/MemoHook';
import { Memorize } from './components/06-memos/Memorize';
import { TodoApp } from './components/07-useReducer/TodoApp';
import { MainApp } from './components/08-useContext/MainApp';

// import { HookApp } from './HookApp';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals