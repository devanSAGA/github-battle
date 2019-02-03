import React from "react";

const PlayerPreview = props => {
  return (
    <div className="column">
      <img className="avatar" src={props.avatar} alt={`${props.id}_image`} />
      <h2 className="username">@{props.name}</h2>
      <button className="reset-button" onClick={() => props.onReset(props.id)}>
        Reset
      </button>
    </div>
  );
};

export default PlayerPreview;
