import React, { useState, useEffect } from "react";
import UserList from "./User/UserList";
import UserDetail from "./User/UserDetail";
import "./App.css";

class App extends React {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUserId: null,
      searchName: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }
  render() {
    const { users, selectedUserId, searchName } = this.state;

    const HandleChange = (e) => {
      this.setState({ searchName: e.target.value });
    };

    const setSelectedUserId = (userId) => {
      this.setState({ selectedUserId: userId });
    };

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
      <div>
        <h1>User List</h1>
        <input
          type="text"
          placeholder="Search with name"
          onChange={HandleChange}
          value={searchName}
        />
        <UserList users={filteredUsers} onUserSelect={setSelectedUserId} />
        {selectedUserId && (
          <UserDetail userId={selectedUserId} search={searchName} />
        )}
      </div>
    );
  }
}

export default App;
