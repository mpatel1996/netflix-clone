import React, {useState,useEffect} from 'react'
import axios   from './axios';

function Row({ title, fetchUrl}){
   const [movies, setMovies] = useState([]);

   // Snippet of code to run on specific condition/variable
   useEffect(() => {
      // [] run once the row loads, dont run again
      // [movies] run once row loads, and everytime movies changes
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      }
      fetchData();

   },[fetchUrl]);

   console.table(movies);
   return (
      <div className="row">
         <h2> {title}</h2>

         <div className="row-posters">
            {/*several movie posters*/}

            {movies.map(movie => (
               <img src={movie.poster_path} alt={movie.name}/>
            ))} 
         </div>
      </div>
   )
}

export default Row