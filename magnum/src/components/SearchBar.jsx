import '../styles/SearchBar.css'
import { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Searching for:', query)
    }
    return (
        <div className='search-wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='search-container'>
                    <Search className='search-icon' size={20} />
                    <input
                        type='text'
                        placeholder="search through any digital footprint."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='search-input'
                    />
                    <button type="submit" className='search-button'>
                        trace
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar