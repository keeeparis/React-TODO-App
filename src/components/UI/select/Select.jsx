import React from 'react'

export default function Select({defaultValue, filter, setFilter, options}) {
    return (
        <select
            value={filter.sort}
            onChange={(e) => setFilter({...filter, sort: e.target.value})}
        >
            <option value='' disabled>{defaultValue}</option>
            {options.map(option => 
                <option value={option.value} key={option.value}>{option.name}</option>    
            )}
        </select>
    )
}
