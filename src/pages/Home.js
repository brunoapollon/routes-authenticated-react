import React from "react";

function Home({ history }) {
  function handleLogout() {
    localStorage.removeItem("@Auth_JWT:JWT_TOKEN");

    history.push("/");
  }

  return (
    <div>
      <h3>Bem vindo</h3>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}

export default Home;
