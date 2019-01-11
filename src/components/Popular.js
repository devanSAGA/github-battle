import React from "react";

import "../style/languages.css";

import SelectLanguage from "./SelectLanguage";
import RepositoriesGrid from "./RepositoriesGrid";
import { api } from "./api";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };
  }

  updateSelectedLanguage = lang => {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });
    api.fetchRepos(lang).then(repos => {
      this.setState({
        repos: repos
      });
    });
  };

  componentDidMount() {
    this.updateSelectedLanguage(this.state.selectedLanguage);
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateSelectedLanguage}
        />
        {!this.state.repos ? (
          <p>LOADING</p>
        ) : (
          <RepositoriesGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}

export default Popular;
