import React from "react";

class AppNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      newCount: 6,
    };
    this.countFromClass = 0;
  }

  render() {
    return (
      <div>

        <span>
          <h1>Hello, {this.countFromClass} times</h1>
          <button onClick={() => this.countFromClass + 1}>
            Increase the Hello Times
          </button>
        </span>

        <span>
          <h1>Hello, {this.state.count} times</h1>
          <button onClick={() =>this.setState({
              count: this.state.count + 1
          })}>
            Increase the Hello Times (using state var)
          </button>
        </span>

      </div>
    );
  }
}

export default AppNew;
