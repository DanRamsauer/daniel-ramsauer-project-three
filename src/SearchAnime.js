import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const SearchedAnime = ({ findAnime }) => {

    const { animeSearched } = useParams();
    const [anime, setAnime] = useState([]);

    useEffect( () => {
        axios({
            url: 'https://api.jikan.moe/v4/anime',
            method: 'GET',
            dataResponse: 'json',
            params: {
                q: animeSearched,
            }
        }).then( (res) => {
            setAnime(res.data.data);
        })
    })

    return(
        <section>
            <Link to={'/'}>
                <h3>Back home</h3>
            </Link>
            <section className="anime">
            {
                anime.map( (anime) => {
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
        </section>
    )
}

export default SearchedAnime;