import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { CheckFavourites} from "../store/actions/favorits";
import { getMovies } from "../store/actions/movies";

export default function Products() {
  const favourites=[];
  const movies=useSelector((state)=>state.movies);
  const dispatch= useDispatch();
  const [pages, setPages] = useState(1);
  useEffect(() => {
    dispatch(getMovies(pages))
  }, [pages]);

 
  const nextData = () => {
    let n=pages;
    n++
    setPages(n);   
  };

  const prevData = () => {
    let n=pages;
    if (pages > 1) {
      n--
      setPages(n);
   
    }
    if (pages <= 1) {
      
      setPages(1);
    }

    
  };
const setFavourites=(id,id1)=>{
  var elem=document.getElementById(id1);
  if(elem.style.color=='red'){
    elem.style.color="yellow";

    favourites.push(id);
  }else{
    elem.style.color='red';
    favourites.splice(id,1)
  }
  
  dispatch(CheckFavourites(favourites));
    
  
}
  return (
    <>
    <div className="container">
      <h2>Movies list</h2>
      <br />
     
      <Row xs={1} sm={1} md={2} lg={3} className="g-4">
        {movies.map((product,index) => (
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
                <FontAwesomeIcon  icon={faStar} style={{float: "left" ,color : "red" }} id={index} onClick={()=>setFavourites(product,index)} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
     
    </div>
     <button className="btn btn-danger mx-5" onClick={prevData}>
     {" "}
     previous
   </button>

   <button className="btn btn-danger mx-5" onClick={nextData}>
     {" "}
     Next
   </button>
   </>
  );
}
