import React from "react";

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ username: value });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="GitHub username"
          value={this.state.username}
          autoComplete="off"
          type="text"
          onChange={this.handleChange}
        />
        <button
          className="button"
          type="submit"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default PlayerInput;
