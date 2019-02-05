import React from "react";
import { Link } from "react-router-dom";

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

    const { match } = this.props;
    return (
      <div>
        <div className="row">
          {!playerOneName && (
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />
          )}
          {playerOneImage && (
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              <button
                className="reset-button"
                onClick={() => this.handleReset("playerOne")}
              >
                Reset
              </button>
            </PlayerPreview>
          )}
          {!playerTwoName && (
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />
          )}
          {playerTwoImage && (
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              <button
                className="reset-button"
                onClick={() => this.handleReset("playerTwo")}
              >
                Reset
              </button>
            </PlayerPreview>
          )}
        </div>
        {playerOneImage &&
          playerTwoImage && (
            <Link
              className="button"
              to={{
                pathname: match.url + "/results",
                search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
              }}
            >
              Battle
            </Link>
          )}
      </div>
    );
  }
}

export default Battle;
