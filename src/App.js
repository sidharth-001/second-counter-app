import React from "react"
import Counter from "./components/Counter"
import Header from "./components/Header"

class App extends React.Component{
  render(){
    return(
      <div>
        <Header text="Time Spent" />
        <Counter />
      </div>
    )
  }
}

export default App;
