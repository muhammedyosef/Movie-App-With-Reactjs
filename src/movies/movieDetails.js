import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export default function ProductDetails() {
  const [details, setDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    axiosInstance
      .get(`movie/${params.id}`,{params:{ api_key:"7032929059f594caea522a2fd8afbde9"}})
      .then((res) =>setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div>
      <h2>Product Details</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.image}/>
      <h3>{details.title}</h3>
      <h4>{details.overview}</h4>
      <h4>{details.vote_average}/10</h4>

    </div>
  );
}
