import Table from "react-bootstrap/Table";
import React from "react";

class UserList extends React.Component {
  render() {
    const { user, onUserSelect } = this.props;
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Yahoo</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id} onClick={() => onUserSelect(user.id)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserList;
