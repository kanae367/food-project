import { useState } from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import SearchItem from './search-item/SearchItem';

const Header = () => {
    const [search, setSearch] = useState('');

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    return(
        <header className="header">
            <Link to={'/'} className="header__home-link">
                <img className="header__icon" src="/hat.png" alt="Повар icon"/>
            </Link>
            <nav className="navbar">
                <Link to={'/posts'} className="navbar__link disabled" disabled={true}>Статьи</Link>
                <NavLink to={'/recipes'} className="navbar__link">Рецепты</NavLink>
                <NavLink to={'/authors'} className="navbar__link">Авторы</NavLink>
            </nav>
            <div className="search">
                <img className="search__icon" src="/search.svg" alt="поиск"/>
                <input className="search__input" type="text" placeholder="поиск по сайту" onInput={handleInput}/>
                {
                    search && <SearchItem name={search}/>
                }
            </div>
            <button className="header__button disabled" disabled>Войти</button>
        </header>
    )
}

export default Header;