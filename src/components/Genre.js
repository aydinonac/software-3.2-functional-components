import Movie from './Movie.js';

function Genre({name, description, movieTitle1, movieTitle2, yearTitle1, yearTitle2}) { 
  return(
    <>
      <span style={{margin: 10, fontSize: 27, color: 'blue',
        fontWeight: 'bold'}}>{name}</span>
      <span>{description}</span>
      <Movie title = {movieTitle1} year = {yearTitle1} />
      <Movie title = {movieTitle2} year = {yearTitle2} />
    </>
  );
}
export default Genre;