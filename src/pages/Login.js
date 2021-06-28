function Login({ history }) {
  function handleLogin() {
    localStorage.setItem("@Auth_JWT:JWT_TOKEN", "token");
    history.push("home");
  }
  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="email" placeholder="Digite seu email" required />
      <input
        type="password"
        name="password"
        placeholder="Digite sua senha"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
