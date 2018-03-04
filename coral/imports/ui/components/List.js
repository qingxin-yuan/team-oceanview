import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      // checked: {
      hiv: false,
      sti: false,
      birth: false
      // }
    };
    this.onChange = this.onChange.bind(this);
    // this.locationInput = undefined
  }
  onChange(input) {
    // console.log(input, this.state.checked[input]);
    this.setState({
      [input]: !this.state[input]
    });
  }
  render() {
    return (
      <div style={{display: "flex", height: "100vh",flexDirection: "column", alignItems: "center"}} >
        <form>
          <label>
            City:
            <input
              className="locationInput"
              type="text"
              value={this.state.value}
              placeholder="vancouver"
              onChange={e => this.setState({ value: e.target.value })}
              // ref={input => this.locationInput = input }
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>liiiiiiiist data here:</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <input
            type="checkbox"
            // id={item._id}
            checked={this.state.hiv}
            onChange={() => this.onChange("hiv")}
          />
          <p style={{ paddingLeft: 10 }}>HIV Testing</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <input
            type="checkbox"
            // id={item._id}
            checked={this.state.sti}
            onChange={() => this.onChange("sti")}
          />
          <p style={{ paddingLeft: 10 }}>STI Testing and Treatment</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <input
            type="checkbox"
            // id={item._id}
            checked={this.state.birth}
            onChange={() => this.onChange("birth")}
          />
          <p style={{ paddingLeft: 10 }}>Birth Control</p>
        </div>
      </div>
    );
  }
}
