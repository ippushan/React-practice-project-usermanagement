import React from 'react'
import Button from '../UI/Button/Button';
import classes from './UsersList.module.css';

const EachUser = (props) => {
    const onClickHandler = () => {
        props.onButtonClick(props.id)
    }
  return (
    
    <li key={props.id}>
    {props.user.username} ({props.user.age} years old)
    <span className={classes.deleteButton}><Button onClick={onClickHandler}>DELETE</Button></span>
</li>
    
  )
}

export default EachUser
