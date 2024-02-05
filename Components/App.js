import React from "react";
import AccountsContainer from "./AccountsContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountsContainer />
    </div>
  );
}

export default App;