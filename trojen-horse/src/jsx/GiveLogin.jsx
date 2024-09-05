import HandleLogin from "./HandleLogin";
import { Container } from "react-bootstrap";

function GiveLogin({ theme }) {
  return (
    <Container>
      <HandleLogin theme={theme} />
    </Container>
  );
}

export default GiveLogin;
