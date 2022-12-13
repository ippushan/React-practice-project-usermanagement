import React from 'react';
import { useState } from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userDetails) => {
    setUsersList((previous) => {
      return ([userDetails, ...previous,])
    })
  }

  const deleteUserHandler = (userId) => {
   console.log(userId)
    const newUsersList = usersList.filter((user) => user.id !== userId)
    setUsersList(newUsersList);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} deleteUserHandler={deleteUserHandler} />
    </div>
  );
}

export default App;
