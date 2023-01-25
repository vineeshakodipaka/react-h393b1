import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

import {Link} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {Row,   Container} from 'react-bootstrap';

export default function Profile() {
  useEffect(() => {
    gettingdata();
  }, []);

  
const {id} = useParams();

  const gettingdata = () => {
    return fetch(`https://api.github.com/users/${id}`)
      .then((obj) => obj.json())
      .then((final) => {
        setele(final);
      });
  };

  const [ele, setele] = useState([]);




  return (
    <div>
      <center>
       <Container>
      <Row className="g-5">
        {
        
        <Col  >
        <Card style={{width:"20rem",height:"30rem"}} className="cards">
       
          <Card.Img variant="top" src={ele.avatar_url}
          style={{width:"15rem",height:"15rem",margin:"15px"}}
          />
          <Card.Body>
         <Card.Title>Id:{ele.id}</Card.Title>
          <Card.Title>Name:{ele.name}</Card.Title>
            <Card.Title>Followers:{ele.followers}</Card.Title>
            <Card.Title>Following:{ele.following}</Card.Title>
              <Link to="/">
              <Button  >{">>"}Back </Button>
              </Link>
           
          </Card.Body>
        </Card>
      </Col>
          
        }
        </Row >
     </Container>
     </center>
      
    </div>
  );
}
