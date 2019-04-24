import React, { Component } from "react";
//import CSSModules from "react-css-modules";

import css from "./index.css";

class HomePage extends Component {
  render() {
    return <main className="main">
 
      <h2 id="title">About Me</h2>
      <div id="aboutmebody">
    
      Hello! My name is Eric Garner. I'm a technical thinker and problem solver who enjoys finding new and
    creative ways to win customer deals and improve operational
    efficiency. A high level of education accompanies 5+ years of
    professional IT experience in virtualization, cloud-based solutions,
    administration, project management, and disaster recovery. I enjoy
    tackling new challenges and am always on the lookout for emerging
    technologies that enhance my existing skill-set and knowledge base.

    </div>
    </main>;
  }
}

export default (HomePage);
