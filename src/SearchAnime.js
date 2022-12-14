import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const SearchedAnime = () => {

    const { animeSearched } = useParams();
    const [ anime, setAnime ] = useState([]);
    const [ error, setError ] = useState(false);

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
        }).catch(() => {
            setError(true)
        })
    }, [animeSearched])

    if (error === true) {
        return(
            <section>
                <h2>There are no results please retry</h2>
                <Link to={`/`}>
                    <h4>Home</h4>
                </Link>
            </section>
        )
    } else {
        return(
            <section>
                <Link to={'/'}>
                    <h3>Home</h3>
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
}

export default SearchedAnime;