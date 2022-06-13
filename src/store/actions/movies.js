import axiosInstance from "../../axiosConfig"
export const getMovies=(pages)=>(dispatch)=>{
return axiosInstance
.get("movie/popular", {
  params: {
    page:pages,
    api_key: "7032929059f594caea522a2fd8afbde9",
  },
})
.then((res) => dispatch({type:"GET_MOVIES",payload:res.data.results}))
.catch((err) => console.log(err));
}