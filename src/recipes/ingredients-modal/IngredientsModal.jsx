import { useState } from 'react';
import classes from './modal.module.scss';

const IngredientsModal = ({onExit, setData, currentIngredients}) => {
    const [ingredients, setIngredients] = useState(currentIngredients);

    const handleExit = (e) => {
        if(!e.target.closest('.' + classes.inner)) onExit();
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        const newIngredients = [...ingredients, e.target.name.value.toLowerCase()]
        setIngredients(newIngredients)
    }

    const handeSearchButton = () => {
        setData(ingredients)
        onExit();
    }

    const handleItemDelete = (thisIndex) => {
        const newIngredients = ingredients.filter((item, index) => index !== thisIndex)
        setIngredients(newIngredients)
    }

    return(
        <div className={classes.outer} onClick={handleExit}>
            <div className={classes.inner}>
                <h3 className={classes.title}>Поиск по ингредиентам</h3>
                <p className={classes.info}>Напишите название ингредиента в поле ввода и нажмите на кнопку, чтобы добавить ингредиент для поиска. Когда Вы выберете все необходимые ингредиенты, нажмите "Искать".</p>
                <p className={classes.ingredients}>
                    Выбранные ингредиенты:
                </p>

                <ul className={classes.list}>
                    {
                        ingredients.length > 0 ?
                        ingredients.map((item, index) => 
                        <li className={classes.item} key={item}>
                            <span className={classes.number}>{index + 1}</span>
                            {item}
                            <button type='button' className={classes.delete} onClick={() => handleItemDelete(index)}>X</button>
                        </li>)
                        : <p>Нет выбранных ингредиентов</p>
                    }
                </ul>

                <form className={classes.form} onSubmit={handleSumbit}>
                    <input className={classes.input} name='name' id="name" type="text" placeholder='Мука' />
                    <button type='submit' className={classes.button} >Добавить</button>
                </form>

                <button type='button' className={classes.button} onClick={handeSearchButton}>Искать</button>
            </div>
        </div>
    )
}

export default IngredientsModal;