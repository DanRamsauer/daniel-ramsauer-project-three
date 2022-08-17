import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AboutAnime = ({ addingAnime, anime, setAnime, added, setAdded } ) => {

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
                <h2>This anime does not exist!</h2>
                <Link to={`/`}>
                    <h4>Home</h4>
                </Link>
            </section>
        )
    } else {
        return(
            <section>
                <div className="aboutAnime">
                    <div className="wrapper">
    
                        { added === true ? <p>Added</p> : <button onClick={ () => addingAnime() }>Add to favourites</button> }
                        { anime.images ? <img className="aboutImg" src={anime.images.jpg.image_url} alt={anime.title} /> : null }
                        <h2>{ anime.title_english ? anime.title_english : anime.title }</h2>
                        <p>{anime.synopsis}</p>
                        <h3>{ anime.episodes > 1 ? `${anime.episodes} episodes` : `${anime.episodes} episode` }</h3>
                        <p>Score {anime.score}</p>
                        <p>Ranked {anime.rank}</p>
                        <p>{ anime.streaming ? `Watch on ${anime.streaming.map( (anime) => { return( ` ${anime.name}` ) }) }` : null}</p>
                    </div>
                </div>
                <Link className="link" to={'/'} onClick={ () => {setAdded(false)} }>
                    <h4>Home</h4>
                </Link>
            </section>
        )
    }
}

export default AboutAnime;