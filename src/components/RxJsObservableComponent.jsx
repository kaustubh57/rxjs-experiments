import React, { Component } from 'react';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

class RxJsObservableComponent extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {
    this.observable$ && this.observable$.unsubscribe();
    this.mySubject$ && this.mySubject$.unsubscribe();
    this.myBehaviorSubject$ && this.myBehaviorSubject$.unsubscribe();
    this.myReplaySubject$ && this.myReplaySubject$.unsubscribe();
  }

  tryObservable = () => {
    this.observable$ = new Observable(observer => {
      observer.next('observable >>> ' + 1);
      //observer.complete();
      observer.next('observable >>> ' + 2);
      observer.next('observable >>> ' + 3);
      observer.complete();
    });

    this.observable$.subscribe(
      value => console.log(value),
      err => {
      },
      () => console.log('observable this is the end...')
    );
  };

  trySubject = () => {
    this.mySubject$ = new Subject();
    this.mySubject$.subscribe(value => console.log('first $ ' + value));
    this.mySubject$.next('subject >>> ' + 1);
    this.mySubject$.next('subject >>> ' + 2);
    // this.mySubject$.complete();

    this.mySubject$.subscribe(value => console.log('second $ ' + value));
    this.mySubject$.next('subject >>> ' + 3);
  };

  tryBehaviorSubject = () => {
    this.myBehaviorSubject$ = new BehaviorSubject(200);
    this.myBehaviorSubject$.subscribe(value => console.log('first $ ' + value));
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 1);
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 2);
    // this.myBehaviorSubject$.complete();

    this.myBehaviorSubject$.subscribe(value => console.log('second $ ' + value));
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 3);
  };

  tryReplaySubject = () => {
    this.myReplaySubject$ = new ReplaySubject();
    this.myReplaySubject$.subscribe(value => console.log('first $ ' + value));
    this.myReplaySubject$.next('ReplaySubject >>> ' + 1);
    this.myReplaySubject$.next('ReplaySubject >>> ' + 2);
    // this.myReplaySubject$.complete();

    this.myReplaySubject$.subscribe(value => console.log('second $ ' + value));
    this.myReplaySubject$.next('ReplaySubject >>> ' + 3);
  };

  render() {
    return (
      <div>RxJsObservableComponent (see console log):
        <div>
          <button onClick={this.tryObservable}>Run Observable Experiment</button>
          <button onClick={this.trySubject}>Run Subject Experiment</button>
          <button onClick={this.tryBehaviorSubject}>Run Behavior Subject Experiment</button>
          <button onClick={this.tryReplaySubject}>Run Replay Subject Experiment</button>
        </div>
      </div>
    );
  }
}

export default RxJsObservableComponent;
