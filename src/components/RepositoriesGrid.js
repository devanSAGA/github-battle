import React from "react";

function RepositoriesGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map((repo, index) => {
        return (
          <li className="popular-item" key={repo.name}>
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={"Avatar for" + repo.owner.login}
                />
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default RepositoriesGrid;
