import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Card, ListGroup, } from 'react-bootstrap';
import '../components/styles/UserList.css';

export const UsersList = () => {


    //users guarda los datos obtenidos
    const [ users, setUsers] = useState([]);

    //Obtengo los datos
    useEffect(() =>{
        const fetchUsers = async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(response.data);
            } catch(error){
                console.log(error);
            }
        };

        fetchUsers();
    },[])
    

//El link redirige al detalle del usuario
  return (
    <div>
        <h1>Users List</h1>
        <Card>
            <ListGroup className='ListGroup' variant='flush' >
            {users.map((user) =>(
                <ListGroup.Item className="item" key={user.id} >
                    <Link to={`/users/${user.id}`} style={{textDecoration:"none", fontSize:"30px"}}>{user.name}</Link>
                </ListGroup.Item>
            ))}
            </ListGroup>
        </Card>
    </div>
  );
};
