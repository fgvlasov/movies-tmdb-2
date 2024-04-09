import React from 'react';

interface MovieCardProps {
  data: {
    id: number;
    name?: string;
    title?: string;
    poster_path?: string;
    first_air_date?: string;
    release_date?: string;
    media_type?: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const {
    id,
    name,
    title,
    poster_path,
    first_air_date,
    release_date,
    media_type,
  } = data;

  return (
    <div className="col-md-3 col-sm-4 py-3" id="card" key={id}>
      <div className="card bg-dark" key={id}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'unavailable.jpg'
          }
          className="card-img-top pt-3 pb-0 px-3"
          alt={title || name}
        />
        <div className="card-body">
          <h5 className="card-title text-center fs-5">{title || name}</h5>
          <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
            <div>{media_type === 'tv' ? 'TV Series' : 'Movie'}</div>
            <div>{first_air_date || release_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
