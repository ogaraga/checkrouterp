import { PropTypes } from 'prop-types';
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';
function MovieCard({movItem}) {
    const Navigate = useNavigate();

    const handleClick = ()=>{
    Navigate('/Description');
}
const {title, description, imgsrc, posterURL, rating} = movItem;
  return (
    <div className='moviecard'>
        <div className='image'>
            <img src= {imgsrc} alt="Movies_pics" onClick={handleClick}/>
        </div>
        <div className='divTitle'>
            <span className='title'>{title}</span>
        </div>
        <div>
            <span className='descrpt'>Desc: {description}</span>
        </div>
        <div>
            <span className='poster'>PosterURL:{posterURL}</span>
        </div>
        <div>
            <span className='rating'>Rating: {rating}</span>
        </div>
    </div>
  )
}
MovieCard.propTypes = {
    movItem: PropTypes.any.isRequired
  }
export default MovieCard