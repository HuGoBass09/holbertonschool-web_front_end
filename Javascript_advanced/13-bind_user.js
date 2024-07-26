const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer",

  logWelcomeUser: function (welcomeString) {
    console.log(
      `${welcomeString}, ${this.firstName}. Your occupation is ${this.occupation}`
    );
  },
};

const bindLogWelcomeUser = user.logWelcomeUser.bind(user);
bindLogWelcomeUser("Welcome");
