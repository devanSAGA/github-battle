import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import Player from "./Player";
import { api } from "./api";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      winner: null,
      loser: null
    };
  }

  componentDidMount() {
    let players = queryString.parse(this.props.location.search);
    api.battle([players.playerOneName, players.playerTwoName]).then(
      function(userData) {
        if (userData === null) {
          return this.setState({
            isLoading: false,
            error: "Error! Make sure that users with given names exist..."
          });
        }
        console.log(userData);
        this.setState({
          isLoading: false,
          error: null,
          winner: userData[0],
          loser: userData[1]
        });
      }.bind(this)
    );
  }

  render() {
    const { isLoading, error, winner, loser } = this.state;

    if (isLoading) {
      return <p>LOADING</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div>
        <div className="row">
          <Player
            label="Winner"
            score={winner.score}
            profile={winner.profile}
          />
          <Player label="Loser" score={loser.score} profile={loser.profile} />
        </div>
        <Link className="button" to="/battle">
          Battle Again
        </Link>
      </div>
    );
  }
}

export default Results;
