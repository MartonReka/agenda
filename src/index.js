import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import Activitate from "./activitate";

ReactDOM.render(
  <Activitate
    ora="11:30"
    titlu="Întâlnire cu absolvenții"
    loc="Sala G114"
    descriere="Prezentarea cerințelor proiectului."
  />,
  document.getElementById("root")
);
