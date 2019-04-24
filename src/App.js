import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import WorkHistoryComponent from "./components/WorkHistory/WorkHistory.js";

function Index() {
  return (
    <div id="homepagerender">
      <HomePage />
    </div>
  );
}
function WorkHistory() {
  return (
    <div id="workhistorypagerender">
      <WorkHistoryComponent />
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <header>
          <nav id="routerlinks">
            <div>
              {" "}
              <Link to="/">Home</Link>
            </div>

            <div>
              {" "}
              <Link to="/work-history/">Work History</Link>
            </div>
          </nav>
        </header>
        <Route path="/" exact component={Index} />
        <Route path="/work-history/" component={WorkHistory} />
      </div>
    </Router>
  );
}

export default AppRouter;

/*   <div className="App">
        <header className="App-header">About Eric Garner</header>
        <main>
          <p>
            <h1>About Me</h1>
            Technical thinker and problem solver who enjoys finding new and
            creative ways to win customer deals and improve operational
            efficiency. A high level of education accompanies 5+ years of
            professional IT experience in virtualization, cloud-based solutions,
            administration, project management, and disaster recovery. I enjoy
            tackling new challenges and am always on the lookout for emerging
            technologies that enhance my existing skill-set and knowledge base.
            1st section - talk about yourself (3 sentences)
          </p>
          <p>
            <h1>Why I'm Attending Helio Training</h1>
            I've read good things online about this course and appreciated the
            flexibility that the course provided for people who work full time
            jobs. The pricing also seemed fair for what was offered. I was
            recently part of a reorg at my company and now find myself working
            on a team of software developers with almost no experience. My goal
            is to eventuall be able to be a contributor to my team.
          </p>
          <p>
            <h1>My Interests</h1>
            When I'm not working I also enjoy spending time outdoors with my
            wife and 2 dogs. I'm a novice fly fisherman and like to spend any
            other free time reading or attempting to hone my woodworking skills.
          </p>



          
        </main>
      </div>



    );
  }
}

export default App;

*/
