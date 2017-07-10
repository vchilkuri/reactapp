import React from "react";

export class Navpage extends React.Component {
    render() {
        return (
          <div>
          <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Obs Component</a>
        </div>
        <ul className="nav navbar-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/Home">New Obs</a></li>
        </ul>
      </div>
    </nav>
          </div>
        );
    }
  }
