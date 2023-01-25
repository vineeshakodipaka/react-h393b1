import React,{useEffect , useState} from "react";
import Profile from "./Profile";
import  {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {Row,   Container} from 'react-bootstrap';
export default function App() {
  const [searchText, setSearchText] = useState("");
  const [Data , setData] = useState([]);
  useEffect( ()=>{gettingdata()} , []);
  const gettingdata = () =>{
    return(fetch('https://api.github.com/users')
    .then( (obj)=> obj.json() )
    .then( (final) => { setData(final)})
    )
  }

 const handlechange=(value)=>{
   setSearchText(value)
   filterdata(value)
 }
 const filterdata=(value)=>{
  const lowercasedValue = value.toLowerCase().trim();
  const filteredData = Data.filter(item => {
    return Object.keys(item).some(key =>
      Data.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
    );
  });
  setData(filteredData);
 }

  return (


    <div><br/>
      <center>
<input type="text" value={searchText} onChange={(e)=>handlechange(e.target.value)}/>  <br/><br/>
</center>
<Container>
      <Row className="g-5">
      {
        Data.map( 
          (ele,ind) =>{return(
              <Col   xs={12} lg={12} xl={3} md={12} className="m-6">
          <Card style={{width:"20rem",height:"25rem"}} className="cards">
            <Card.Img variant="top" src={ele.avatar_url}
            style={{width:"15rem",height:"15rem",margin:"15px"}}
            />
            <Card.Body>
              <Card.Title>{ele.login}</Card.Title>
             
             
                <Link id="link" to={ele.login}>
                <Button  >More </Button>
                </Link>
             
            </Card.Body>
          </Card>
        </Col>
          )}
        )
      }
       
    </Row>
    </Container>
      
    </div>
  );
}
