import React from "react";

const PlayerPreview = props => {
  return (
    <div className="column">
      <img className="avatar" src={props.avatar} alt={`${props.id}_image`} />
      <h2 className="username">@{props.username}</h2>
      {props.children}
    </div>
  );
};

export default PlayerPreview;
