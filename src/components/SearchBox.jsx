import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.searchValue}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			<button onClick={(event) => props.setSearchValue("")}>clear search</button>
		</div>
	);
};

export default SearchBox;