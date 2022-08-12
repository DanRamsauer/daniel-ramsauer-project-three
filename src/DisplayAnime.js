const DisplayAnime = ({anime}) => {
    return(
        <section>
            {
                anime.map( (anime) =>{
                    return(
                        <div className="anime" key={anime.mal_id}>
                                <img src={anime.images.jpg.image_url} alt={anime.title} />
                                <h2>{anime.title}</h2>
                                <h3>{anime.type}</h3>
                                <p>{anime.synopsis}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default DisplayAnime;