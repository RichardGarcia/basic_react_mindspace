import React from "react";
import PropTypes from 'prop-types';

export class Parentchild extends React.Component {
  render() {

    return (
      <div>
        <hr/>
        <p>From Parentchild Component</p>
        <p>Communicating between Parent and Child Component</p>
        <p>Your full name is --> {this.props.fullName}</p>
        <button onClick={this.props.greet} className="btn btn-primary">Say hello in console!</button>
      </div>
    );
  }

}

Parentchild.propTypes = {
  fullName: PropTypes.string,
  greet: PropTypes.func
}