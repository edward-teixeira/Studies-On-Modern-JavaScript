//Init
const github = new GitHub();
//Init UI
const ui = new UI();
// Search Input
const searchUser = document
  .getElementById("searchUser")
  .addEventListener("keyup", e => {
    //Get input tex
    const userText = e.target.value;
    if (userText !== "") {
      //Make http call
      github.getUser(userText).then(data => {
        if (data.profile.message === "Not Found") {
          //Show an alert that the user was not found
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          //Display the profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
    } else {
      //clear profile
      ui.clearProfile();
    }
  });
