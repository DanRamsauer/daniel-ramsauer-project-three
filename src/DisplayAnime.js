import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DisplayAnime = ({ setAnime, anime, nextPage }) => {

    useEffect( () => {
        axios({
        url: 'https://api.jikan.moe/v4/top/anime',
        method: 'GET',
        dataResponse: 'json',
        params: {
          page: 1
        }
      }).then((res) => {
        const results = res.data.data;
        setAnime(results);
      })
    },[])

    return(
        <section className="anime">
            {
                anime.map( (anime) =>{
                    return(
                        <li className="wrapper" key={anime.mal_id}>
                            <Link to={`/anime/${anime.mal_id}`}>
                                <img src={anime.images.jpg.image_url} alt={anime.title} />
                            </Link>
                        </li>
                    )
                })
            }
        </section>
    )
}

export default DisplayAnime;