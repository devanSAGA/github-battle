import axios from "axios";

const getProfile = username => {
  return axios
    .get("https://api.github.com/users/" + username)
    .then(user => user.data);
};

const getRepos = username => {
  return axios.get("https://api.github.com/users/" + username + "/repos");
};

const getTotalStars = repos => {
  return repos.data.reduce(
    (totalStars, repo) => totalStars + repo.stargazers_count,
    0
  );
};

const calculateScore = (profile, repos) => {
  let followersCount = profile.followers;
  let stars = getTotalStars(repos);

  return followersCount * 3 + stars;
};

const getUserData = player => {
  return axios.all([getProfile(player), getRepos(player)]).then(data => ({
    profile: data[0],
    score: calculateScore(data[0], data[1])
  }));
};

const sortPlayers = players => {
  return players.sort((a, b) => b.score - a.score);
};

const handleError = error => {
  console.warn(error);
  return null;
};

let api = {
  battle: function(players) {
    return axios
      .all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  },
  fetchRepos: function(language) {
    let encodedURI = window.encodeURI(
      "https://api.github.com/search/repositories?q=stars:>1+language:" +
        language +
        "&sort=stars&order=desc&type=Repositories"
    );

    return axios.get(encodedURI).then(function(response) {
      return response.data.items;
    });
  }
};

export { api };
