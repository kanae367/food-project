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