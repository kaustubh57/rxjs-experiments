import React, {Component} from 'react';
import {Observable} from 'rxjs';

class RxJsSubjectComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.observable$ = Observable.create(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.observable$.subscribe(
      value => console.log(value),
      err => {
      },
      () => console.log('this is the end...')
    );
  }

  componentWillUnmount() {
    this.observable$.unsubscribe();
  }

  render() {
    return (<div>RxJsSubjectComponent</div>);
  }
}

export default RxJsSubjectComponent;
