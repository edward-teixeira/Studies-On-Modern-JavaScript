class GitHub {
  constructor() {
    //This is necessary to fetch the data from github
    //as described in the api documentation
    this.client_id = "b831f65ef714f396c2b5";
    this.client_secret = "99b7db226c8e12c13fceabdf02a7e67d87a45177";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  //Returns an Object, which is the user that was fetched from the public github api
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
