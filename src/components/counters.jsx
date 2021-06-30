import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="d-block">
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        {this.props.counters.map((counter) => (
          <React.Fragment>
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
            />
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Counters;
