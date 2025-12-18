import { useState} from 'react';
import MatchCard from './MatchCard';
import './MatchList.css'

export default function MatchList({matches, onAddToCart}) {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('date');

    const filteredMatches = matches.filter(match =>
        match.title.toLowerCase().includes(search.toLowerCase()) ||
        match.location.toLowerCase().includes(search.toLowerCase())
    );

    const sortedMatches = [...filteredMatches].sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return new Date(a.date) - new Date(b.date);
    });

    return (
        <div className='match-list-container'>
            <div className='filters'>
                <input
                    type='text'
                    placeholder='Rechercher un match ...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='search-input'
                />
                <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='sort-select'
                >
                    <option value='date'>Trier par date</option>
                    <option value='price-asc'>Prix : Bas à Haut</option>
                    <option value='price-desc'>Prix : Haut à Bas</option>
                </select>
            </div>

            <div className='matches-grid'>
                {sortedMatches.length > 0 ? (
                    sortedMatches.map(match => (
                        <MatchCard
                            key={match.id}
                            match={match}
                            onAddToCart={onAddToCart}
                        />
                    ))
                ) : (
                    <p className='no-matches'>Aucun match trouvé.</p>
                )}
            </div>
        </div>
    );
}