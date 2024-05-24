import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import classes from './single-recipe.module.scss';
import getRecipeData from "./getRecipeData";

const RecipePage = () => {
    const {slug} = useParams();
    const recipe = getRecipeData(slug);

    if(!recipe) throw new Error(`Нет рецепта с полем slug = ${slug}`, {status: 404})

    return(
        <Layout>
            <main className={classes.recipe}>
                <h1 className={classes.title}>Рецепты со всего мира</h1>
                <div className={classes.container}>
                    <div className={classes.info}>
                        <h2 className={classes['recipe__title']}>{recipe.name}</h2>
                        <div className={classes["info__container"]}>
                            <span className={classes["info__item"]}>
                                <svg className={classes.time} width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                {recipe.time}
                            </span>
                            <span className={classes["info__item"]}>
                                <svg className='like-icon' width="47px" height="47px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Добавить в избранное
                            </span>
                            <div className={classes.raiting}>
                                <span className={classes["info__item"]}>
                                    <img className={classes["thumbsup"]} src="/thumbsup.svg" alt="Лайки"/>
                                    {recipe.raiting.likes}
                                </span>
                                <span className={classes["info__item"]}>
                                    <img className={classes["thumbsdown"]} src="/thumbsdown.svg" alt="Дизлайки" />
                                    {recipe.raiting.dislikes}
                                </span>
                            </div>
                        </div>
                    </div>
                    <img className={classes.video} src={recipe.video} alt="video" />
                    <ul className={classes.preview}>
                        {
                            recipe.previews.map(preview => 
                                <li key={preview}>
                                    <img className={classes["preview__image"]} src={preview} alt={preview} />
                                </li>
                            )
                        }
                    </ul>

                    <div className={classes["additional__info"]}>
                        <div className={classes.author}>
                            <span className={classes["author__caption"]}>
                                Автор рецепта
                            </span>
                            <img className={classes["author__image"]} src={recipe.author.image} alt={recipe.author.name} />
                            <div className={classes["author__container"]}>
                                <span className={classes["author__name"]}>Автор: {recipe.author.name}</span>
                                <button className={classes["author__button"]}>Подписаться</button>
                            </div>
                        </div>
                        <div className={classes.energy}>
                            <h4 className={classes["energy__title"]}>Энергитическая ценность на порцию</h4>
                            <ul className={classes["energy__list"]}>
                                <li className={classes["energy__list-item"]}>
                                    Калорийность 
                                    <span className={classes["energy__number"]}>
                                        {recipe.energy.calories}
                                        <span>ккал</span>
                                    </span>
                                </li>
                                <li className={classes["energy__list-item"]}>
                                    Белки 
                                    <span className={classes["energy__number"]}>
                                        {recipe.energy.proteins}
                                        <span>грамм</span>
                                    </span>
                                </li>
                                <li className={classes["energy__list-item"]}>
                                    Жиры 
                                    <span className={classes["energy__number"]}>
                                        {recipe.energy.fat}
                                        <span>грамм</span>
                                    </span>
                                </li>
                                <li className={classes["energy__list-item"]}>
                                    Углеводы 
                                    <span className={classes["energy__number"]}>
                                        {recipe.energy.fat}
                                        <span>ккал</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.ingredients}>
                        <h4 className={classes["ingredients__title"]}>Ингредиенты на одну порцию</h4>
                        <ul className={classes["ingredients__list"]}>
                            {
                                recipe.ingredients.map(item => 
                                    <li className={classes["ingredients__item"]}>
                                        <div className={classes["ingredients__item-name"]}>
                                            <span className={classes["ingredients__item-text"]}>
                                                {item.name}
                                            </span>
                                            <span className={classes["ingredients__item-line"]}></span>
                                        </div>
                                        {item.amount}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className={classes.instructions}>
                        <h4 className={classes["instructions__title"]}>Инструкция приготовления</h4>
                        <ol className={classes["instructions__list"]}>
                            {
                                recipe.instructions.map((item, index) => 
                                    <li className={classes["instructions__item"]}>
                                        <img className={classes["instructions__image"]}  src={item.image} alt={`${index + 1} шаг`} />
                                        <p className={classes["instructions__text"]}>
                                            <span>{index + 1}.</span> 
                                            {item.text}
                                        </p>
                                    </li>
                                )
                            }
                        </ol>
                    </div>
                    <div className={classes.outro}>
                        <div className={classes.advice}>
                            <span className={classes["advice__title"]}>Совет к рецепту</span>
                            <span className={classes["advice__text"]}>
                                {recipe.advice}
                            </span>
                        </div>
                        <div className={classes["outro__text"]}>Приятного аппетита!</div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default RecipePage;