import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="github-calendar-wrap">
      <h4 className="panel-heading">Days I code</h4>
      <GitHubCalendar
        username="Yassin522"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
