import React from "react";
import PlayerInput from "./PlayerInput";

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
    const { playerOneName, playerTwoName } = this.state;
    return (
      <div className="row">
        {!playerOneName && (
          <PlayerInput
            id="playerOne"
            label="Player One"
            onSubmit={this.handleSubmit}
          />
        )}
        {!playerTwoName && (
          <PlayerInput
            id="playerTwo"
            label="Player Two"
            onSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default Battle;
