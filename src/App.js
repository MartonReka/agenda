import React, { Component } from "react";
import Program from "./program";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activitati: [
        {
          id: 1,
          ora: "10:00",
          titlu: "Întâlnire cu presa",
          loc: "Sala G114",
          descriere: "Nu este cazul"
        },
        {
          id: 2,
          ora: "10:30",
          titlu: "Pauză de cafea",
          loc: "Birou",
          descriere: "Se dezbat diverse."
        },
        {
          id: 3,
          ora: "12:00",
          titlu: "Pregătire curs",
          loc: "Birou",
          descriere: "Pregătirea exemplelor."
        }
      ]
    };

    this.stergeActivitate = this.stergeActivitate.bind(this);
  }

  stergeActivitate(ev) {}

  render() {
    return (
      <div className="container">
        <Program
          activitati={this.state.activitati}
          stergeActivitate={this.stergeActivitate}
        />
      </div>
    );
  }
}

export default App;
