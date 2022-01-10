//Setup Sammy.js
import Recipe from "./controllers/recipeCtrl";
import User from "./controllers/userCtrl";
import Kinvey from "./helpers/kinvey";

window.db = new Kinvey("kid_H1cFBRV2Y", "f71d975100694ac680783d1fa229293e");
window.allRecipes = [];
window.msgs = [];
window.msgCounter = 0;
window.formData = {};
window.sharedData = {};
window.loggedIn = false;

const app = Sammy("#rooter", function () {
  this.use("Handlebars", "hbs");

  const recipeCtrl = new Recipe();
  const userCtrl = new User();

  this.get("#/", recipeCtrl.getHome);
  this.get("#/Recipes/share", recipeCtrl.getShareRecipe);
  this.post("#/Recipes/share", recipeCtrl.postShareRecipe);
  this.get("#/user/login", userCtrl.getLogin);
  this.post("#/user/login", userCtrl.postLogin);
  this.get("#/user/signup", userCtrl.getSignup);
  this.post("#/user/signup", userCtrl.postSignup);
  this.get("#/user/logout", userCtrl.getLogout);
  this.get("#/details/:id", recipeCtrl.getDetails);
  this.get("#/Recipes/archive/:id", recipeCtrl.getArchive);
  this.get("#/Recipes/edit/:id", recipeCtrl.getEdit);
  this.post("#/Recipes/edit", recipeCtrl.postEdit);
  this.get("#/Recipes/like/:id", recipeCtrl.getLike);
});

app.run("#/");
