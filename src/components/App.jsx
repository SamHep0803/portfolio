import "../styles/index.scss";
import React from "react";
import Profile from "./Profile";

const App = () => {
  return (
    <>
      <section className="profile"></section>
      <main>
        <section>
          <h1>Hello from React</h1>
        </section>
      </main>
      <Profile />
    </>
  );
};

export default App;
