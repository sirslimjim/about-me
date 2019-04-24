import React, { Component } from "react";
//import CSSModules from "react-css-modules";

import css from "./index.css";

class WorkHistoryComponent extends Component {
  render() {
    return <main className="main">
 
      <h2 id="title">Work History</h2>
      <div id="workhistorybody">
    
      <h3>Senior Cloud Reliability Engineer - Health Catalyst</h3>
      <ul>
          <li>October 2016-Present</li>
      </ul>
      <h3>Sr. Cloud Systems Administrator - MasterControl</h3>
      <ul>
          <li>December 2015 - October 2016</li>
      </ul>
      <h3>Sr. Cloud Architect - Lightstream Communications</h3>
      <ul>
          <li>July 2015 - December 2015</li>
      </ul>

      <h3>Sr. Engineer, Cloud Disaster Recovery - Carbonite</h3>
      <ul>
          <li>October 2012 - June 2015</li>
      </ul>

    </div>
    </main>;
  }
}

export default (WorkHistoryComponent);
