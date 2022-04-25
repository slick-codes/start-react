


const SearchPanel = function( props ){

    const { handlers } = props

    return (
        <div className="search">
            <section className="search__bar">
                <input type="search" onChange={ handlers.updateSearchValue } placeholder="Search for for a Todo" />
                <button className="search__button">Search</button>
            </section>
        </div>
    );
}


export default SearchPanel