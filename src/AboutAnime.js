import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AboutAnime = () => {

    const { animeId } = useParams();
    const [anime, setAnime] = useState([]);

    useEffect( () => {
        axios({
            url: `https://api.jikan.moe/v4/anime/${animeId}/full`
        }).then( (res) => {
            setAnime(res.data.data)
        })
    },[anime])

    return(
        <section>
            <div className="aboutAnime">
                <div className="wrapper">
                    {/* TODO: fix the images breaking the website */}
                    {/* <img src={anime.images.jpg.image_url} alt={anime.title} /> */}
                    <h2>{ anime.title_english ? anime.title_english : anime.title }</h2>
                    <p>{anime.synopsis}</p>
                    <h3>{ anime.episodes > 1 ? `${anime.episodes} episodes` : `${anime.episodes} episode` }</h3>
                    <p>Score {anime.score}</p>
                    <p>Ranked {anime.rank}</p>
                    <p>{anime.streaming ? `Watch on ${anime.streaming.map( (anime) => { return( anime.name ) })}` : null}</p>
                </div>
            </div>
            <Link to={'/'}>
                <h4>Home</h4>
            </Link>
        </section>
    )
}

export default AboutAnime;