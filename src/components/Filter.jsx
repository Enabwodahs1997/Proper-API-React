import React from 'react'

export function Filter({ filterInput, setFilterInput }) { 
    return (
        <input
            id='filter'
            type='text'
            placeholder='Search users...'
            className='filter-input'
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
        />
    )
}

export default Filter