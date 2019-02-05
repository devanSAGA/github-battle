import React from "react";
import PlayerPreview from "./PlayerPreview";

const Player = props => {
  console.log(props);
  const info = props.profile;
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3>Score: {props.score}</h3>
      <PlayerPreview avatar={info.avatar_url} username={info.login}>
        <ul className="space-list-items">
          {info.name && <li>{info.name}</li>}
          {info.location && <li>{info.location}</li>}
          {info.company && <li>{info.company}</li>}
          <li>Following: {info.following}</li>
          <li>Followers: {info.followers}</li>
          <li>Public Repos: {info.public_repos}</li>
        </ul>
      </PlayerPreview>
    </div>
  );
};

export default Player;
