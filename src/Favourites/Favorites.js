import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";




export default function Favorites() {
    const favourites=useSelector(state=>state.favorits.title)

    const [fav,setFav]=useState({
        favourite:favourites,
    });
    
   
    const deleteMovie=(id)=>{
     
            if(id>-1){
            fav.favourite.splice(id,1);
            
         setFav({
             ...fav,
             name:fav.favourite
         })
     
         }
    }
    return (
        <div>
            <h1>this is Favorites</h1>
            <div className="container">
      <h2>Movies list</h2>
      <br />
     
      <Row xs={1} md={3} className="g-4">
        {fav.favourite.map((product,index) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
              />
              <Card.Body>
              <Link to={`/productDetails/${product.id}`} >
                <Card.Title>{product.title}</Card.Title>
                <Card.Text></Card.Text>
                </Link>
                <FontAwesomeIcon  icon={faTrash} style={{float: "left" ,color : "red" }} onClick={()=>deleteMovie(index)}  />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
     
    </div>
        </div>
    )
}
