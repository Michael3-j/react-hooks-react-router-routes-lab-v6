import {Link} from 'react-router-dom';

function MovieCard({title,id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <linkk to={`/movie/${id}`}>View Info</linkk>
    </article>
  );
};

export default MovieCard;