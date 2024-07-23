import '../styles/Search.scss';

function Search({ search, setSearch, types}) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    const handleChange = (ev) =>{
        setSearch({...search, name: ev.target.value});
    }

    const handleSelect = (ev) =>{
        setSearch({...search, type: ev.target.value});
    }

    const handleReset = () => {
        setSearch({name: '', type: ''})
    }



  return (
    <form className="hidden" onSubmit={handleSubmit}>
        {/* <label htmlFor="search-name" className="input">search</label> */}
        <input className="search__name" type="text" name="search-name" id="search-name" onChange={handleChange} value={search.name} placeholder="Product name"/>

        <select className="search__select" name="types" id="types" onChange={handleSelect} value={search.type}>
            <option className="search__select-option" value="">All</option>
            {types.map((type, i)=>{
                return <option key={i} className="search__select-option"value={type}>{type}</option>
            })}
        </select>

        <input className="search__x" type="submit" value="Search" onClick={handleReset} />

        <input className="search__x" type="reset" value="Reset" onClick={handleReset} />
    </form>
  )
}

export default Search