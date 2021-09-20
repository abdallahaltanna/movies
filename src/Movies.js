import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

function Movies() {
  const { isLoading, data } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <div className='movies'>
      {data.map((item) => {
        const { Poster, Title, Year, imdbID } = item;
        return (
          <Link to={`/movies/${imdbID}`} key={imdbID} className='movie'>
            <article>
              <img src={Poster === 'N/A' ? url : Poster} alt={Title} />
              <div className='movie-info'>
                <h4>{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default Movies;
