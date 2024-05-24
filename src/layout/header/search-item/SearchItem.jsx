import classes from './search-item.module.scss';
import { Link } from 'react-router-dom';
import data from '../../../data.json';

const SearchItem = ({name}) => {
    const nameToSearch = name.toLowerCase();
    const item = data.find(item => item.name.toLowerCase().includes(nameToSearch));
    
    const nameToDisplay = (() => {
        if(item){
            return item.name.length > 20 ? item.name.split('').splice(0, 18).join('') + '...' : item.name;
        }
    })(); 


    return(
        <>
            {
                item ? 
                    <Link className={classes.container} to={`/recipes/${item.slug}`}>
                        <img className={classes.image} src={`/recipe/${item.src}`} alt={item.name} />
                        <div>
                            <p className={classes.name}>{nameToDisplay}</p>
                            <p className={classes.ingr}>{item.ingr}</p>
                            <p className={classes.time}>
                                {item.time}
                               <svg className={classes.icon} width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                        </div>
                    </Link>
                    : 
                    <div className={classes.container}>
                        <div className={classes.empty}>
                            Не могу найти блюдо с таким названием
                        </div>
                    </div>
            }
        </>
    )
}

export default SearchItem;