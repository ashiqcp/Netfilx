import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../axios'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[3]);
            setMovie(response.data.results[2])

        })
    }, [])
    return ( 
        <div className='banner' style={{ backgroundSize: "cover", backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
            <div className="content">
            <h1 className="title">{movie ? movie.original_title :""}</h1>
            <div className='banner_buttons'>
                <button>Play</button>
                <button>My List</button>
                </div>
                <h2 className='description'>{movie ? movie.overview :""}</h2>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
