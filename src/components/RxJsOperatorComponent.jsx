import React, { Component } from 'react';
import { interval, of } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';

class RxJsOperatorComponent extends Component {

  componentDidMount() {
    this.initTestData();

    this.tryTakeOperator();
    this.tryMapOperator();
    this.tryFilterOperator();
    this.tryMergeMapOperator();
  }

  componentWillUnmount() {
    this.letters$.unsubscribe();

    this.takeOperator$.unsubscribe();
    this.mapOperator$.unsubscribe();
    this.filterOperator$.unsubscribe();
    this.mergeMapOperator$.unsubscribe();
  }

  initTestData() {
    this.letters$ = of('a', 'b', 'c');
  }

  tryTakeOperator() {
    this.takeOperator$ = interval(1000)
      .pipe(take(5));

    this.takeOperator$.subscribe(value => console.log('take $ >>> ' + value));
  }

  tryMapOperator() {
    this.mapOperator$ = interval(1000)
      .pipe(take(5))
      .pipe(map(value => value * 10));

    this.mapOperator$.subscribe(value => console.log('take and map $ >>> ' + value));
  }

  tryFilterOperator() {
    this.filterOperator$ = interval(1000)
      .pipe(take(5))
      .pipe(filter(value => value % 2 === 0))
      .pipe(map(value => value + 10));

    this.filterOperator$.subscribe(value => console.log('take, map and filter $ >>> ' + value));
  }

  tryMergeMapOperator() {
    this.mergeMapOperator$ = this.letters$
      .pipe(mergeMap(x => interval(1000)
        .pipe(take(5))
        .pipe(map(i => x + i))),
      );

    this.mergeMapOperator$.subscribe(value => console.log('mergeMap $ >>>' + value));
  }

  render() {
    return (<div>RxJsOperatorComponent</div>);
  }
}

export default RxJsOperatorComponent;
