import React from "react";
import PropTypes from 'prop-types';

export class Eventssample extends React.Component {

  constructor(props) {
    super();
    this.state = {
      age: props.initialAge
    }
  }

  // method
  onAddAge() {
    this.setState({
      age: this.state.age + 2
    });
  }

  render() {

    return (
      <div>
        <hr/>
        <p>From Events Sample</p>
        <p>Your name is {this.props.name} and you age is {this.state.age}</p>
        <button onClick={() => this.onAddAge()} className="btn btn-primary">Add 2 to your age</button>
      </div>
    );
  }
}

Eventssample.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number
}