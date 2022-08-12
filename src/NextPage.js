const NextPage = ({nextPage, setNextPage}) => {
    return(
        <div>
            <button onClick={()=> setNextPage(nextPage - 1)}>Last Page</button>
            <button onClick={()=> setNextPage(nextPage + 1)}>Next Page</button>
            <p>{`Page ${nextPage}`}</p>
        </div>
    )
}

export default NextPage;