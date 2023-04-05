import React from 'react';

const SearchBox = (props) => {

	const clearSearch = () => {
		props.setMovies([]);
		props.setSearchValue("");
	}

	const handleSearchChange = (value) => {
		props.setSearchValue(value)
	}

	return (
		<div className='SearchBox'>
			<input
				className='form-control'
				value={props.searchValue}
				onChange={(event) => handleSearchChange(event.target.value)}
				placeholder='Type to search...'
			></input>
			<button onClick={clearSearch}>clear search</button>
		</div>
	);
};

export default SearchBox;