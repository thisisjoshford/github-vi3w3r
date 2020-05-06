export const fetchUser = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json());
};

export const fetchRepos = (userName) => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json());
};
