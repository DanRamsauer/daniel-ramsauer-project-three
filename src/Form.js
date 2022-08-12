const Form = () => {
    return(
        <section>
            <form>
                <label htmlFor="search">Search an anime: </label>
                <input type="text" for='search' placeholder="Naruto"/>

                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default Form;