import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm({ theme }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [IsLoggedIn, setIsloggedIn] = useState("");

  function handleLogin() {
    if (
      username === "erxes" &&
      password === "1234"
      //   email === "Uuganaa@gmail.com"
    ) {
      setIsloggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  }

  if (IsLoggedIn) {
    return <h4>Hi, {username}</h4>;
  }

  return (
    <Form className={theme}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We will always share your email with everyone.
        </Form.Text>
      </Form.Group>
      <FormGroup>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormGroup>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Are you human" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Log in
      </Button>
    </Form>
  );
}

export default LoginForm;
