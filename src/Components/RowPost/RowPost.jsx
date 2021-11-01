import React, { useEffect,useState } from 'react'
import { API_KEY,imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../axios'
function RowPost(props) {
    const [rowpost, setRowPost] = useState([])
    const [movieTrailer, setMovieTrailer] = useState('')
    useEffect(() => {
       axios.get(props.url).then((response)=>{
           console.log(response.data);
           setRowPost(response.data.results)
       })
    }, [])

    const opts = {
        height: '700',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovieTrailer=(id)=>{
          console.log(id);
          axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
              console.log(response.data);
              if(response.data.results.length!==0){
                  setMovieTrailer(response.data.results[0])
              }else{
                  console.log("Trailor not Available");
              }
          })
      }

    return (
        <div className='row'>
             <h3 className='viewAll'>View All</h3>
            <h2>{props.title}</h2>
           
            <div className="rowPosters">
            {
                rowpost.map((rowposts)=>
                    <img onClick={()=>handleMovieTrailer(rowposts.id)} className={props.isSmall ? 'smallPoster' :'posterImg'} src={`${imageUrl+rowposts.poster_path}`} alt="Poster" />
                )
            }
            </div>
          {movieTrailer &&  <YouTube videoId={movieTrailer.key} opts={opts}/>}
          
        
        </div>
    )
    
    
}

export default RowPost
