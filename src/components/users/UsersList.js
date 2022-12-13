import React from "react";
// import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import EachUser from "./EachUser";
import classes from './UsersList.module.css'


const UsersList = (props) => {
   
    const buttonOnClickHandler = (id) => {
        props.deleteUserHandler(id)
    }
   
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user,index) => (
                    <EachUser key ={index} id = {user.id} onButtonClick = {buttonOnClickHandler} user = {user}/>
                ))
                }
            </ul>
        </Card>
    )
}

export default UsersList;