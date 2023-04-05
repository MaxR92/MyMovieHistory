import React from 'react';
import Top10 from "../images/Top10.png";

const SearchBox = (props) => {

	const clearSearch = () => {
		props.setMovies([
			{
				Poster: `${Top10}`,
				Title: "Top 10 of all time",
				Type: "movie",
				Year: "2023",
				imdbID: "",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
				Title: "The Shawshank Redemption",
				Type: "movie",
				Year: "1994",
				imdbID: "tt0111161",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				Title: "The Godfather",
				Type: "movie",
				Year: "1972",
				imdbID: "tt0068646",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
				Title: "The Dark Knight",
				Type: "movie",
				Year: "2008",
				imdbID: "tt0468569",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				Title: "The Godfather Part Two",
				Type: "movie",
				Year: "1974",
				imdbID: "tt0071562",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
				Title: "12 Angry Men",
				Type: "movie",
				Year: "1957",
				imdbID: "tt0050083",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
				Title: "Schindler's List",
				Type: "movie",
				Year: "1993",
				imdbID: "tt0108052",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				Title: "The Lord of the Rings: The Return of the King",
				Type: "movie",
				Year: "2003",
				imdbID: "tt0167260",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				Title: "Pulp Fiction",
				Type: "movie",
				Year: "1994",
				imdbID: "tt0110912",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
				Title: "The Lord of the Rings: The Fellowship of the Ring",
				Type: "movie",
				Year: "2001",
				imdbID: "tt0120737",
			  },
			  {
				Poster:
				  "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
				Title: "The Good, the Bad and the Ugly",
				Type: "movie",
				Year: "1966",
				imdbID: "tt0060196",
			  }
		]);
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