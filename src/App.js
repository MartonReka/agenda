import React, { Component } from "react";
import Program from "./program";
import Formular from "./formular";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activitati: [
        {
          id: 1,
          ora: "08:00",
          titlu: "Stomatologie",
          loc: "Zoriilor",
          descriere: "Adresa: Str.Ion Mester, nr.4A"
        },
        {
          id: 2,
          ora: "10:00",
          titlu: "Aqua Swimm",
          loc: "Sun Grigorescu",
          descriere: "Durata de 2 ora"
        },
        {
          id: 3,
          ora: "12:00 - 18:00",
          titlu: "Work",
          loc: "Birou",
          descriere: "Meeting de la ora 16:00"
        }
      ]
    };

    this.adaugActivitate = this.adaugActivitate.bind(this);
    this.stergeActivitate = this.stergeActivitate.bind(this);
  }

  adaugActivitate(act) {
    const { activitati } = this.state;
    var sirAct = activitati;
    sirAct.push({
      id: sirAct.length ? sirAct[sirAct.length - 1].id + 1 : 1,
      ora: act.ora,
      titlu: act.titlu,
      loc: act.loc,
      descriere: act.descriere
    });
    this.setState({ activitati: sirAct });
  }

  stergeActivitate(ev) {
    const idSup = parseInt(ev.target.id); //  id e convertit in intreg
    const { activitati } = this.state;
    const sirAct = activitati.filter(item => {
      return item.id !== idSup;
    });
    this.setState({ activitati: sirAct });
  }

  render() {
    return (
      <div className="container">
        <Program
          activitati={this.state.activitati}
          stergeActivitate={this.stergeActivitate}
        />
        <Formular adaugActivitate={this.adaugActivitate} />
      </div>
    );
  }
}

export default App;
