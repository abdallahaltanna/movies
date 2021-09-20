import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

function SingleMovie() {
  const { id } = useParams();
  const { isLoading, data, error } = useFetch(`&i=${id}`);

  const { Title, Poster, Plot, Year } = data;

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (error.show) {
    return (
      <div className='error-page'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }

  return (
    <div className='single-movie'>
      <img src={Poster} alt={Title} />
      <div>
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </div>
  );
}

export default SingleMovie;
