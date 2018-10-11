import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import util from "../utils.js";

export default class Register extends Component {
  render() {
    this.props.pageName();
    if (this.props.user) {
      return <Redirect to="/story" push />;
    }
    return (
      <div className="border bg-white shadow-sm px-3 py-3 px-md-5 py-md-5 col-md-6 m-auto">
        <h4 className="text-center text-primary">Sign up</h4>
        <p className="text-danger">{this.props.error}</p>
        <form onSubmit={e => util.prepareData(e, this.props.registerUser)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="registerName"
              type="text"
              name="name"
              required="true"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="registerEmail"
              type="email"
              name="email"
              required="true"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="registerPassword"
              type="password"
              name="password"
              required="true"
              minLength="6"
              className="form-control"
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
