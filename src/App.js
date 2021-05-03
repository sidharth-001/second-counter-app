import React from "react";

// import Counter from "./components/Counter";
import Header from "./components/Header";
import Seconds from "./components/Seconds";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header text="Time Spent" />
        <Seconds />
      </div>
    )
  }
}

export default App;
