import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const UserList = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(UserList);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterUsers(e.target.value);
  };

  const filterUsers = (searchValue) => {
    const filteredList = UserList.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filteredList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input className="form-control form-control-lg" type="text" placeholder="Search Here" value={searchTerm} onChange={handleChange} />
        </form>
        <ul className="UserList">
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <p className="UserName">{user.name}</p>
              <p className="UserEmail">{user.email}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;





