import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AboutAnime = ({ addingAnime, anime, setAnime } ) => {

    const { animeId } = useParams();
    const [error, setError] = useState(false);

    useEffect( () => {
        axios({
            url: `https://api.jikan.moe/v4/anime/${animeId}/full`
        }).then( (res) => {
            setAnime(res.data.data)
        }).catch(() => {
            setError(true);
          })
    },[])

    const handleClick = () => {
        setError(false);
    }

    if (error === true) {
        return(
            <section>
                <h2>You are clicking into the images too fast for the API to keep up please try slow it down</h2>
                {/* <Link to={`/anime/${animeId}`}>
                    <h4>Retry</h4>
                </Link> */}
                <button onClick={()=> handleClick()}>Retry</button>
            </section>
        )
    } else {
        return(
            <section>
                <div className="aboutAnime">
                    <div className="wrapper">
    
                        <button onClick={ () => addingAnime() }>Add to watch later</button>
                        { anime.images ? <img className="aboutImg" src={anime.images.jpg.image_url} alt={anime.title} /> : null }
                        <h2>{ anime.title_english ? anime.title_english : anime.title }</h2>
                        <p>{anime.synopsis}</p>
                        <h3>{ anime.episodes > 1 ? `${anime.episodes} episodes` : `${anime.episodes} episode` }</h3>
                        <p>Score {anime.score}</p>
                        <p>Ranked {anime.rank}</p>
                        <p>{ anime.streaming ? `Watch on ${anime.streaming.map( (anime) => { return( ` ${anime.name}` ) }) }` : null}</p>
                    </div>
                </div>
                <Link to={'/'}>
                    <h4>Home</h4>
                </Link>
            </section>
        )
    }
}

export default AboutAnime;