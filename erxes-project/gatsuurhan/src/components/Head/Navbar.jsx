import dynamic from "next/dynamic";

const Card = dynamic(() => import("react-bootstrap/Card"), {
  ssr: false,
});

function Navbar() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Navbar;
