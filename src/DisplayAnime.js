const DisplayAnime = ({anime}) => {
    return(
        <section className="anime">
            {
                anime.map( (anime) =>{
                    return(
                        <div className="wrapper" key={anime.mal_id}>
                                <img src={anime.images.jpg.image_url} alt={anime.title} />

                                <h2>
                                    {
                                        anime.title_english ? anime.title_english : anime.title
                                    }
                                </h2>

                                <h3>{anime.type}</h3>
                                <p>Score</p>
                                <p>{anime.score}</p>

                                <p>
                                    { 
                                        anime.episodes ? anime.episodes >1 ? `${anime.episodes} episodes` : `${anime.episodes} episode` : null
                                    }
                                </p>

                                {/* <p>{anime.synopsis}</p> */}
                        </div>
                    )
                })
            }
        </section>
    )
}

export default DisplayAnime;