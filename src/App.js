import React from 'react';
import './App.css';
import RxJsObservableComponent from './components/RxJsObservableComponent';
import RxJsOperatorComponent from './components/RxJsOperatorComponent';
import RxJsPromiseComponent from './components/RxJsPromiseComponent';

function App() {
  return (
    <div>
      <div className="App">
        RxJs Learning Project...
      </div>
      <RxJsObservableComponent/>
      <RxJsOperatorComponent/>
      <RxJsPromiseComponent/>
    </div>
  );
}

export default App;
