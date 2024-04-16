function SignUp() {
  return (
    <div>
      <h2>Inscription</h2>
      <form>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button type="submit">S inscrire</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
