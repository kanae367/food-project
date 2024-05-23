import './recipe-item.scss';
import { Link } from 'react-router-dom';

const RecipeItem = ({...props}) => {
    const {name, src, ingr, time, slug} = props;

    return(
        <Link to={`/recipes/${slug}`} className='recipe__item'>
            <img className='recipe__image' src={`/recipe/${src}`} alt={name} />
            <div className='recipe__info'>
                <h3 className='recipe__title'>{name}</h3>
                <div className='recipe__container'>
                    <span className='recipe__ingr'>{ingr}</span>
                    <span className='recipe__time'>
                        <img className='recipe__time-icon' src="/time.png" alt="time" />    
                        {time}
                    </span>
                </div>
                <button className='recipe__like-button'>
                    <img className='recipe__like-icon' src="/like.png" alt="like" />
                    Добавить в избранное
                </button>
            </div>
        </Link>
    )
}

export default RecipeItem;