import React from 'react';
import { connect } from 'react-redux';

import {
  asyncAddOne,
  asyncSubOne,
} from './actions';

@connect(state => ({
  count: state.asyncCountReducer,
}))
export default
class Count extends React.Component {
  asyncAddOne = () => {
    this.props.dispatch(asyncAddOne());
  }

  asyncSubOne = () => {
    this.props.dispatch(asyncSubOne());
  }

  render() {
    const {
      count,
    } = this.props;

    return (
      <div>
        Count is {count}
        <br />
        <button onClick={this.asyncAddOne}>+1</button>
        <button onClick={this.asyncSubOne}>-1</button>
      </div>
    );
  }
}

