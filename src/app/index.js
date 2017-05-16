// console.log("it works!!");
import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Dynamic} from "./components/Dynamic";
import {Propssample} from "./components/Propssample";

class App extends React.Component {
  render() {

    var user = {
      name: "Markus Mark",
      hobbies: ["Badminton", "Reading", "Eating"]
    };

    return(
      <div className="container">

        <div className="row">
          <div className="col-xs-12">
            <Header/>
          </div>
        </div>
        
        <p>paragraph from index.js..</p>

        <div className="row">
          <div className="col-xs-12">
            <Home/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <Dynamic/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <Propssample name={"Buddy Zabala"} age={27} user={user}>
              <p>this is a paragraph</p>
            </Propssample>
          </div>
        </div>

      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));