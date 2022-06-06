import React, { useEffect, useState } from 'react'
import axios from 'axios'


const api_key = "cc1426b379b1e382f4e8ec9a9bc802b7";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;


function Menu() {
    const [data, setData] = useState([]);

    const api = axios.create({ baseURL: BASE_URL });
    
    const getUpcoming = api.get("/movie/upcoming", { params: { api_key } });
    
    useEffect(() => {
        getUpcoming.then((res) => {
            setData(res.data.results);
        });
},[]);
 


        return (
            <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Upcoming Movie</h2>
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {data.map((movie) => (
                      <div className="w-full min-h-80 bg-gray-500 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img src={getImage(movie.poster_path)} /><br/>
                        <p>{movie.original_title}</p><br/>
                        <p>{movie.overview}</p>
                        <p>{movie.rating}</p>
                      </div>
                    ))}
              </div>
            </div>
            </div>
        )
    
}

export default Menu

// const Menu = () => {
//     return (
//         <div className="menu-card">
//             <div className="h-screen flex justify-center items-center bg-green-300">
//                 <h1 className="text-9xl uppercase font-black">
//                     Menu Page
//                 </h1>
//             </div>
//         </div>
//     )
// }



// export default Menu
