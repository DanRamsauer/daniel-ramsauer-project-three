const Form = ({searchChange, findAnime, submit}) => {
    return(
        <section className="form">
            <form>
                <label htmlFor="search">Search an anime: </label>
                <input type="text" htmlFor='search' placeholder="Naruto" onChange={searchChange} value={findAnime}/>

                <button type="submit" onClick={submit}>Search</button>
            </form>
        </section>
    )
}

export default Form;