import data from "./Data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserCard({ setUserId }) {
  console.log(data);
  return (
    <div className="d-flex justify-content-around top">
      {(data || []).map((d) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={d.profile} width={100} height={300} />
          <Card.Body>
            <div key={d.id}>
              <Card.Title>{d.name}</Card.Title>
              <Card.Text>Avatar: {d.avatar}</Card.Text>
              <a src="./UserDetail.jsx">
                <Button variant="info" onClick={() => setUserId(d.id)}>
                  Detail's
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default UserCard;
