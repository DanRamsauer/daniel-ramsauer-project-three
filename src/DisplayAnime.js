import { Link } from "react-router-dom";

const DisplayAnime = ({anime}) => {
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