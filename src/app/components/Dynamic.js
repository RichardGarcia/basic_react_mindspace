import React from "react";

export class Dynamic extends React.Component {
  render() {

    let string01 = "this is a string..";

    return (
      <div>
        <p>from Dynamic Component - Outputting dynamic Data</p>
        <p>{string01}</p>
        <p>js ternary, 5 == 2 ? "yes" : "no" =  {5 == 2 ? "yes" : "no"}</p>
      </div>
    );
  }

}