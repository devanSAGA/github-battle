import React from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };
  }

  handleReset = id => {
    this.setState(() => {
      const newState = {};
      newState[id + "Name"] = "";
      newState[id + "Image"] = null;
      return newState;
    });
  };

  handleSubmit = (id, username) => {
    this.setState(() => {
      const newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] =
        "http://github.com/" + username + ".png?size=200";
      return newState;
    });
  };

  render() {
    const {
      playerOneName,
      playerTwoName,
      playerOneImage,
      playerTwoImage
    } = this.state;

    return (
      <div className="row">
        {!playerOneName && (
          <PlayerInput
            id="playerOne"
            label="Player One"
            onSubmit={this.handleSubmit}
          />
        )}
        {playerOneImage && (
          <PlayerPreview
            avatar={playerOneImage}
            name={playerOneName}
            id="playerOne"
            onReset={this.handleReset}
          />
        )}
        {!playerTwoName && (
          <PlayerInput
            id="playerTwo"
            label="Player Two"
            onSubmit={this.handleSubmit}
          />
        )}
        {playerTwoImage && (
          <PlayerPreview
            avatar={playerTwoImage}
            name={playerTwoName}
            id="playerTwo"
            onReset={this.handleReset}
          />
        )}
      </div>
    );
  }
}

export default Battle;
