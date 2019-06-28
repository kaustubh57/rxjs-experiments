import React from 'react';
import './App.css';
import RxJsObservableComponent from './components/RxJsObservableComponent';
import RxJsOperatorComponent from './components/RxJsOperatorComponent';

function App() {
  return (
    <div>
      <div className="App">
        RxJs Learning Project...
      </div>
      <RxJsObservableComponent/>
      <RxJsOperatorComponent/>
    </div>
  );
}

export default App;
