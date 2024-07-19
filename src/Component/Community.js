import React from "react";
import "./Community.css";

function Community() {
  return (
    <div className="App1" id="Community">
      <div className="container1">
        <div className="join">
          <h1>Community Support</h1>
          <p>
            Join a community of like-minded individuals for networking, support,
            and knowledge sharing.
          </p>
        </div>
        <div className="email">
          <p>Email</p>
          <input type="text" name="Email" className="input1"></input><br></br>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Community;
