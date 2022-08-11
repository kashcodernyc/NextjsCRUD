import React from 'react'
import AddUserForm from "./AddUserForm"
import UpdateUserForm from './UpdateUserForm';


const Form = () => {
    const flag = false;

    return(
        <div className="container mx-auto py-5">
            {flag  ? <UpdateUserForm/> : <AddUserForm/>}
        </div>
    
    )
}

export default Form