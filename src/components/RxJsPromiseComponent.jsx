import React, { Component } from 'react';

class RxJsPromiseComponent extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  tryPromiseRetry = () => {
    console.log('#### tryPromiseRetry');
  };

  render() {
    return (
      <div>RxJsPromiseComponent (see console log):
        <div>
          <button onClick={this.tryPromiseRetry}>Run retry with 3 times Experiment</button>
        </div>
      </div>
    );
  }
}

export default RxJsPromiseComponent;
