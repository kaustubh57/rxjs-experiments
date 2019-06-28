import React, {Component} from 'react';
import {Observable} from 'rxjs';

class RxJsSubjectComponent extends Component {

  constructor(props) {
    super(props);

    let observable$ = Observable.create(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    observable$.subscribe(
      value => console.log(value),
      err => {
      },
      () => console.log('this is the end...')
    )
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (<div>RxJsSubjectComponent</div>);
  }
}

export default RxJsSubjectComponent;
