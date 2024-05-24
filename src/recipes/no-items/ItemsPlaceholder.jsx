import classes from './items-placeholder.module.scss';

const ItemsPlaceholder = () => {
    return(
        <div className={classes.container}>
            Кажется, у нас нет рецепта подходящего под выбранные фильтры. Хотите добавить свой?
        </div>
    )
}

export default ItemsPlaceholder;