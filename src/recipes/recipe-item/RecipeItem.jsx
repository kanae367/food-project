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
                        <svg className='recipe__time-icon' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {time}
                    </span>
                </div>
                <button className='recipe__like-button'>
                    <svg className='recipe__like-icon' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Добавить в избранное
                </button>
            </div>
        </Link>
    )
}

export default RecipeItem;