// console.log("it works!!");
import React from "react";
import {render} from "react-dom"

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Dynamic} from "./components/Dynamic";

class App extends React.Component {
  render() {
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

      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));