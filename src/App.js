import React from "react";
import "./App.css";
import Lightbulb from "./components/Lightbulb";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLightOn: false
    };
  }

  HandleClick = () => {
    this.setState({ isLightOn: !this.state.isLightOn });
  };

  render() {
    const url = this.state.isLightOn
      ? "https://media.giphy.com/media/26BkNrGhy4DKnbD9u/giphy.gif"
      : "https://media2.giphy.com/media/26BkNrGhy4DKnbD9u/giphy_s.gif?cid=ecf05e476l7j8ye6ksk1brmu0rncumn9fmukoj9p262btao8&rid=giphy_s.gif";
    const text = this.state.isLightOn ? "Turn off" : "Turn on";
    return (
      <div className="App">
        <Lightbulb url={url} />
        <Button click={this.HandleClick} text={text} />
      </div>
    );
  }
}

export default App;
