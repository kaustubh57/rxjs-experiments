import React, { Component } from 'react';
import { interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

class RxJsOperatorComponent extends Component {

  componentDidMount() {
    this.tryTakeOperator();
    this.tryMapOperator();
    this.tryFilterOperator();
  }

  componentWillUnmount() {
   this.takeOperator$.unsubscribe();
   this.mapOperator$.unsubscribe();
  }

  tryTakeOperator() {
    this.takeOperator$ = interval(1000)
      .pipe(take(5));

    this.takeOperator$.subscribe(value => console.log('take $ >>> ' + value));
  }

  tryMapOperator() {
    this.mapOperator$ = interval(1000)
      .pipe(take(5))
      .pipe(map(value => value*10));

    this.mapOperator$.subscribe(value => console.log('take and map $ >>> ' + value));
  }

  tryFilterOperator() {
    this.mapOperator$ = interval(1000)
      .pipe(take(5))
      .pipe(filter(value => value%2===0))
      .pipe(map(value => value + 10));

    this.mapOperator$.subscribe(value => console.log('take, map and filter $ >>> ' + value));
  }

  render() {
    return (<div>RxJsOperatorComponent</div>);
  }
}

export default RxJsOperatorComponent;
