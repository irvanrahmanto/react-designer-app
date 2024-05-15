import { useState } from 'react';

let Search = ({ children }) => {
    const [query, setQuery] = useState('');

    return (
        <div className="search-container">
            <input className="search" type="text" placeholder="Search designer..." value={query} onChange={(e) => setQuery(e.target.value)} />
            { children }
        </div>
    )
}

export default Search;