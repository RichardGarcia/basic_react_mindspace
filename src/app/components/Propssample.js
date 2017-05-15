import React from "react";

export class Propssample extends React.Component {
  render() {

    // console.log(this.props);

    return (
      <div>
        <p>From PropsSample</p>
        <p>Your name is {this.props.name} and you age is {this.props.age}</p>
        <p>User Object => Name: {this.props.user.name}</p>
        <div>
          <h4>Hobbies:</h4>
          <ul>
            {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}