import React, { Component } from 'react';
import { interval, of } from 'rxjs';
import { filter, map, mergeMap, switchMap, take } from 'rxjs/operators';

class RxJsOperatorComponent extends Component {

  componentDidMount() {
    this.initTestData();
  }

  componentWillUnmount() {
    this.letters$ && this.letters$.unsubscribe();
    this.takeOperator$ && this.takeOperator$.unsubscribe();
    this.mapOperator$ && this.mapOperator$.unsubscribe();
    this.filterOperator$ && this.filterOperator$.unsubscribe();
    this.mergeMapOperator$ && this.mergeMapOperator$.unsubscribe();
    this.switchMapOperator$ && this.switchMapOperator$.unsubscribe();
  }

  initTestData() {
    this.letters$ = of('a', 'b', 'c');
  }

  tryTakeOperator = () => {
    this.takeOperator$ = interval(1000)
      .pipe(take(5));

    this.takeOperator$.subscribe(value => console.log('take $ >>> ' + value));
  };

  tryMapOperator = () => {
    this.mapOperator$ = interval(1000)
      .pipe(take(5))
      .pipe(map(value => value * 10));

    this.mapOperator$.subscribe(value => console.log('take and map $ >>> ' + value));
  };

  tryFilterOperator = () => {
    this.filterOperator$ = interval(1000)
      .pipe(take(5))
      .pipe(filter(value => value % 2 === 0))
      .pipe(map(value => value + 10));

    this.filterOperator$.subscribe(value => console.log('take, filter and map $ >>> ' + value));
  };

  tryMergeMapOperator = () => {
    this.mergeMapOperator$ = this.letters$
      .pipe(mergeMap(x => interval(1000)
        .pipe(take(5))
        .pipe(map(i => x + i))),
      );

    this.mergeMapOperator$.subscribe(value => console.log('mergeMap, take and map $ >>>' + value));
  };

  trySwitchMapOperator = () => {
    this.switchMapOperator$ = this.letters$
      .pipe(switchMap(x => interval(1000)
        .pipe(take(5))
        .pipe(map(i => x + i))),
      );

    this.switchMapOperator$.subscribe(value => console.log('switchMap, take and map $ >>>' + value));
  };

  render() {
    return (
      <div>RxJsOperatorComponent (see console log):
        <div>
          <button onClick={this.tryTakeOperator}>Run Take Operator Experiment</button>
          <button onClick={this.tryMapOperator}>Run Map Operator Experiment</button>
          <button onClick={this.tryFilterOperator}>Run Filter Operator Experiment</button>
          <button onClick={this.tryMergeMapOperator}>Run MergeMap Operator Experiment</button>
          <button onClick={this.trySwitchMapOperator}>Run SwitchMap Operator Experiment</button>
        </div>
      </div>
    );
  }
}

export default RxJsOperatorComponent;
