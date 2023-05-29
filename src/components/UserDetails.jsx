import React from 'react';
import { useState, useEffect } from 'react';
import { Route, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, ListGroup, Button } from 'react-bootstrap';
import '../components/styles/UserDetails.css';

export const UserDetails = () => {

    const navigate = useNavigate();

    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUser(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        const fetchAddress = async () => {
          try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setAddress(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUser();
        fetchAddress();
      }, [userId]);

      const handleClick = () =>{
        navigate('/')
      }
    
      return (
        <div>

        {user ? (
          <Card className='cardContainer'>
            <Card.Body style={{textDecoration:"none", fontSize:"20px"}}>
              <Card.Title className='cardTitle' style={{textDecoration:"none", fontSize:"30px", fontWeight:"500"}}>{user.name}</Card.Title>
              <Card.Text className='cardData'>
                Email: {user.email}<br/>
                Phone: {user.phone}<br/>
                Web: {user.website}<br/>
                {/* City: {user.address.city}<br/>
                {user.address.street}<br/>
                {user.address.zipcode}<br/> */}
                
              </Card.Text>
            
            {address && (
              
              <ListGroup variant="flush">
                <ListGroup.Item>Street: {user.address.street}</ListGroup.Item>
                <ListGroup.Item>City: {user.address.city}</ListGroup.Item>
                <ListGroup.Item>Zipcode: {user.address.zipcode}</ListGroup.Item>
              </ListGroup>
             
            )}
             </Card.Body>
          </Card>
        ) : (
          <p>Loading user...</p>
        )}
        <Button onClick={handleClick} variant="outline-dark " size="lg" style={{marginTop:"30px"}}>Volver</Button>
      </div>
    );
  };




