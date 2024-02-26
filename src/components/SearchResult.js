import React from 'react'

const SearchResult = ({symbol, value, onSelect}) => {
  return (
    <div
    onClick={() => onSelect(symbol)}
    className='h-[50px] z-20 mx-auto cursor-pointer flex flex-row justify-evenly my-3 p-2 text-lg border rounded-lg hover:-translate-y-2 shadow-md backdrop-blur-sm bg-white/30 w-[280px] ease-in-out duration-300'>
        <span>{symbol}</span>
        <span>{value}</span>
    </div>
  )
}

export default SearchResult