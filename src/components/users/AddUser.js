import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/Error/ErrorModal";
import classes from './AddUser.module.css';


const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error,setError] = useState()

  const usernameChangeHandler =(event) => {
    setUsername(event.target.value)
  }
  
  const ageChangeHandler =(event) => {
    setAge(event.target.value)
  }
  
  
  const addUserHandler = (e) => {
    e.preventDefault();
    if(username.trim().length ===0 || age.trim().length ===0){
      setError({
        title : 'Invalide Input',
        message : 'Please Fill All Field'
      })
      return
    }
    if(+age < 1){
      setError({
        title : 'InvalidAge',
        message : 'Please Enter a Valid Age (>0)'
      })
      return
    }
      props.onAddUser({username,age,id:Math.random().toString()})
      setUsername('')
      setAge('')
  };

  const closeHandler = () => {
    setError(null)
  }

  return (
    <div>
    { error&&<ErrorModal title = {error.title} message = {error.message} onErrorHandler = {closeHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={usernameChangeHandler} id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input value={age} onChange={ageChangeHandler} id="username" type="number" />
        <Button type="submit">AddUser</Button>
      </form>
      
    </Card>
    </div>
  );
};

export default AddUser;
