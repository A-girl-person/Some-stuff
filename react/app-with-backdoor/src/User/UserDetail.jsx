import React from "react";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  render() {
    const ({ userId, search } = this.props)
    if(userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then((response) => response.json())
          .then((data) => this.setState(data));
      }
      if(search) {
        fetch(`https://jsonplaceholder.typicode.com/users/${search}`)
          .then((response) => response.json())
          .then((data) => this.setState(data));
      }
    
        if (!user) return <p>Ghosted</p>;
        if (!user) return <p>Doesnt exist</p>;
    return (
      <div>
        <p>
          <strong>{user.name}</strong>
        </p>
        <p>Email:{user.email}</p>
        <p>Title:{user.company.name}</p>
        <p>Phone:{user.phone}</p>
        <p>
          Address:{user.address.street},{user.address.city}
        </p>
      </div>
    );
  }
}

export default UserDetail;
