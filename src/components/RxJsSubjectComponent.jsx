import React, { Component } from 'react';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

class RxJsSubjectComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.tryObservable();
    this.trySubject();
    this.tryBehaviorSubject();
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

  tryBehaviorSubject() {
    this.myBehaviorSubject$ = new BehaviorSubject(200);
    this.myBehaviorSubject$.subscribe(value => console.log('first $ ' + value));
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 1);
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 2);
    // this.myBehaviorSubject$.complete();

    this.myBehaviorSubject$.subscribe(value => console.log('second $ ' + value));
    this.myBehaviorSubject$.next('BehaviorSubject >>> ' + 3);
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

  componentWillUnmount() {
    this.observable$.unsubscribe();
    this.mySubject$.unsubscribe();
  }

  render() {
    return (<div>RxJsSubjectComponent</div>);
  }
}

export default RxJsSubjectComponent;
