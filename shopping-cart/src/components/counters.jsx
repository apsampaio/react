import React, { Component } from 'react';
import Counter from './counter'


class Counters extends Component {

  render() {
    //console.log('Counters - Rendered')
    const { onReset, onDelete, onIncrement, counters, onNew } = this.props

    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >Reset</button>
        <button
          className="btn btn-success btn-sm m-2"
          onClick={onNew}
        >New</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;