import React from "react";

export default function Map(){
    const [users,setUsers]=React.useState([
        {id:1,name:"saniya"},
        {id:2,name:"Prachi"}
    ]);
    return(

        <ul>
            {users.map(user=>(
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>


    );
}