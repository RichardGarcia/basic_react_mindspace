import React from "react";
import PropTypes from 'prop-types';

export class Propssample extends React.Component {
  render() {

    // console.log(this.props);

    return (
      <div>
        <hr/>
        <p>From PropsSample</p>
        <p>Your name is {this.props.name} and you age is {this.props.age}</p>
        <p>User Object => Name: {this.props.user.name}</p>
        <div>
          <h4>{this.props.user.name}'s  Hobbies (from Array):</h4>
          <ul>
            {this.props.user.hobbies.map((hobby, keyid) => <li key={keyid}>{hobby}</li>)}
            <hr/>
            {this.props.children}
          </ul>
        </div>
      </div>
    );
  }
}

Propssample.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
}