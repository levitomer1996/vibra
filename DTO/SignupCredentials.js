class SignupCredentials {
  email;
  password;
  f_name;
  languge_speak;
  languge_learn;
  
  constructor(email, password, f_name, languge_speak, languge_learn) {
    this.email = email;
    this.password = password;
    this.f_name = f_name;
    this.languge_speak = languge_speak;
    this.languge_learn = languge_learn;
  }
}

export default SignupCredentials;
