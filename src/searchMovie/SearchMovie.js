import React, { useState ,useEffect} from 'react';
import axiosInstance from "../axiosConfig";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap';



export default function SearchMovie() {
    const [movies, setMovies] = useState([]);
    
    const [pages,setPages]= useState(1)
    const [movie,setMovie]= useState({
        name:"",
      })
      const handleInputChange=(e)=>{

        if(e.target.name==="name"){
          setMovie({
            ...movie,
            name:e.target.value,
          })
        }
      }
      useEffect(() => {
        
      axiosInstance
        .get("movie/popular", {
          params: {
            page: pages,
            api_key: "7032929059f594caea522a2fd8afbde9",
          },
        })
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err));
  
      
    }, []);
  
   
      const resultSearch=()=>{
       
            axiosInstance
            .get("/search/movie", {
              params: {
                query: movie.name,
                api_key: "7032929059f594caea522a2fd8afbde9",
              },
            })
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err));
          
      }
    return (
        <div>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="name"
          value={movie.name}
          onChange={(e) => handleInputChange(e)}
        />
        <Button variant="outline-success" onClick={resultSearch}>Search</Button>
      </Form>
        
      <h2> Movies list</h2>
      <br/>
      <Row xs={1} md={3} className="g-4">
{movies.map((product) => (
  <Col key={product.id}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>
<br/>
        </div>
    )
}
