import React, { Component } from 'react';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

class RxJsObservableComponent extends Component {

  componentDidMount() {
    this.tryObservable();
    this.trySubject();
    this.tryBehaviorSubject();
    this.tryReplaySubject();
  }

  tryObservable() {
    this.observable$ = Observable.create(observer => {
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
  }

  trySubject() {
    this.mySubject$ = new Subject();
    this.mySubject$.subscribe(value => console.log('first $ ' + value));
    this.mySubject$.next('subject >>> ' + 1);
    this.mySubject$.next('subject >>> ' + 2);
    // this.mySubject$.complete();

    this.mySubject$.subscribe(value => console.log('second $ ' + value));
    this.mySubject$.next('subject >>> ' + 3);
  }

  tryBehaviorSubject() {
    this.myBehaviorSubject$ = new BehaviorSubject(200);
    this.myBehaviorSubject$.subscribe(value => console.log('first $ ' + value));
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 1);
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 2);
    // this.myBehaviorSubject$.complete();

    this.myBehaviorSubject$.subscribe(value => console.log('second $ ' + value));
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 3);
  }

  tryReplaySubject() {
    this.myReplaySubject$ = new ReplaySubject();
    this.myReplaySubject$.subscribe(value => console.log('first $ ' + value));
    this.myReplaySubject$.next('ReplaySubject >>> ' + 1);
    this.myReplaySubject$.next('ReplaySubject >>> ' + 2);
    // this.myReplaySubject$.complete();

    this.myReplaySubject$.subscribe(value => console.log('second $ ' + value));
    this.myReplaySubject$.next('ReplaySubject >>> ' + 3);
  }

  componentWillUnmount() {
    this.observable$.unsubscribe();
    this.mySubject$.unsubscribe();
    this.myBehaviorSubject$.unsubscribe();
    this.myReplaySubject$.unsubscribe();
  }

  render() {
    return (<div>RxJsObservableComponent</div>);
  }
}

export default RxJsObservableComponent;
