import React, { Component } from 'react';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

class RxJsOperatorComponent extends Component {

  componentDidMount() {
    this.numbers$ = interval(1000).pipe(take(5));
    this.numbers$.subscribe(value => console.log('interval $ >>> ' + value));
  }

  componentWillUnmount() {
   this.numbers$.unsubscribe();
  }

  render() {
    return (<div>RxJsOperatorComponent</div>);
  }
}

export default RxJsOperatorComponent;
