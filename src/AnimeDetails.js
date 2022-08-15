import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AnimeDetails = () => {

    const { animeId } = useParams();
    const [anime, setAnime] = useState({});

    useEffect( () => {
        axios({
            url: `https://api.jikan.moe/v4/anime/${animeId}/full`
        }).then( (res) => {
            setAnime(res.data.data)
        })
    },[anime])


    return(
        <section>
            <div className="animeDetails">
                <h2>{anime.title}</h2>
                {/* <img src={anime.images.jpg.image_url} alt={anime.title} /> */}
            </div>
            <Link to={'/'}>
                <h4>Home</h4>
            </Link>
        </section>
    )
}

export default AnimeDetails;