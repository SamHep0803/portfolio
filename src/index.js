import "./styles/index.scss";

const profile = {
  name: "Sharif",
  age: 14,
  email: "samhep0803@gmail.com",
};

const testProfile = {
  ...profile,
  projects: 4,
};

console.log(testProfile);
