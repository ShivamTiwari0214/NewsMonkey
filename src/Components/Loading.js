import React, { Component } from "react";
import loading from "./loading-gif.gif";
export default class Loading extends Component {
  render() {
    return (
      <div
        className="container text-center d-flex justify-content-center"
        style={{ height: "70vh" }}
      >
        <div className="align-self-center">
          {" "}
          <img src={loading} alt="Loading" />
        </div>
      </div>
    );
  }
}
