import React from  "react";

function Users (props){
    console.log(props)
    return (
        <div>
            Name is : {props.name} {`${Math.random(100)}`}
        </div>
    )
}

export default Users;