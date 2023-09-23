import { useState } from "react";

const ControlledForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("Mamun Prodhan");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 4 characters");
    } else {
      console.log(name, email, password);
      setError("");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    // const currentName = e.target.value;
    // if (currentName.length < 10) {
    //   setError("Name must be 10 characters");
    // } else {
    //   setName(e.target.value);
    //   setError("");
    // }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // const currentEmail = e.target.value;
    // if (currentEmail.length < 15) {
    //   setError("Email must be 15 characters");
    // } else {
    //   setEmail(e.target.value);
    //   setError("");
    // }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Name"
        />{" "}
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Email"
        />{" "}
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
        />{" "}
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ControlledForm;
