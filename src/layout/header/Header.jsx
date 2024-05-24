import { useState } from 'react';
import classes from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import SearchItem from './search-item/SearchItem';

const Header = () => {
    const [search, setSearch] = useState('');

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    return(
        <header className={classes.header}>
            <Link to={'/'}>
                <img className={classes.logo} src="/hat.png" alt="Повар icon"/>
            </Link>
            <nav className={classes.navbar}>
                <Link to={'/posts'} className={`${classes.link} ${classes.disabled}`} disabled={true}>Статьи</Link>
                <NavLink to={'/recipes'} className={classes.link}>Рецепты</NavLink>
                <NavLink to={'/authors'} className={classes.link}>Авторы</NavLink>
            </nav>
            <div className={classes.search}>
                <img className={classes.icon} src="/search.svg" alt="поиск"/>
                <input className={classes.input} type="text" placeholder="поиск по сайту" onInput={handleInput}/>
                {
                    search && <SearchItem name={search}/>
                }
            </div>
            <button className={`${classes.button} ${classes.disabled}`} disabled>Войти</button>
        </header>
    )
}

export default Header;