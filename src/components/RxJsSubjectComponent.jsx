import React, { Component } from 'react';
import { Observable, Subject } from 'rxjs';

class RxJsSubjectComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.tryObservable();
    this.trySubject();
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
      () => console.log('this is the end...')
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

  componentWillUnmount() {
    this.observable$.unsubscribe();
    this.mySubject$.unsubscribe();
  }

  render() {
    return (<div>RxJsSubjectComponent</div>);
  }
}

export default RxJsSubjectComponent;
