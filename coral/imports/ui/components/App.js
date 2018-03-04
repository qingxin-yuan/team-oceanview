import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import List from "./List";
import { Route, Redirect, Link } from "react-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    // this.locationInput = undefined
  }
  render() {
    console.log(this.props.history);
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <form
          onSubmit={e => {
            // e.prevenDefault();
            this.props.history.replace("/list");
            // return <Route exact path={'/list'} component={List} />;
            // <Redirect to= {{pathname: '/list'}} />
          }}
        >
          <label>
            City:
            <input
              className="locationInput"
              type="text"
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
              // ref={input => this.locationInput = input }
            />
          </label>

          {/* <Link to={"/list"}> */}
            <input type="submit" value="Submit" />
          {/* </Link> */}
        </form>
        {/* <List /> */}
      </div>
    );
  }
}
