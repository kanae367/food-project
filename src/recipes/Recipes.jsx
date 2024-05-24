import Layout from "../layout/Layout";
import RecipeItem from "./recipe-item/RecipeItem";
import './recipes.scss';
import data from '../data.json';
import { useEffect, useState } from "react";
import IngredientsModal from "./ingredients-modal/IngredientsModal";
import ItemsPlaceholder from "./no-items/ItemsPlaceholder";
import { hasAll } from "../hasAll";

const initialItems = data.map(item => <RecipeItem key={item.slug} name={item.name} src={item.src} ingr={item.ingr} time={item.time} slug={item.slug}/>)

const Recipes = () => {
    const [ingredients, setIngredients] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems] = useState(initialItems);

    const generateAndSetData = (array) => {
        const newItems = array.map(item => <RecipeItem key={item.slug} name={item.name} src={item.src} ingr={item.ingr} time={item.time} slug={item.slug}/>)
        setItems(newItems);
    }
    
    const handleSumbit = (e) => {
        e.preventDefault();
        const target = e.target;

        const filters = {
            category: target.category.value,
            menu: target.menu.value,
            dish: target.dish.value,
            coisine: target.coisine.value 
        }

        const newData = data.filter(item => 
            (filters.category === "all" || item.tags.includes(filters.category)) 
            &&  (filters.menu === 'all' || item.tags.includes(filters.menu))
            &&  (filters.dish === 'all' || item.tags.includes(filters.dish))
            &&  (filters.coisine === 'all' || item.tags.includes(filters.coisine)))
        
        generateAndSetData(newData);
    }

    useEffect(() => {
        if(ingredients.length > 0){
            const newData = data.filter(item => hasAll(ingredients, item.ingredients))
            generateAndSetData(newData);
        }else{
            generateAndSetData(data);
        }
    }, [ingredients])

    return(
        <Layout>
            {isModalOpen && <IngredientsModal currentIngredients={ingredients} setData={(data) => setIngredients(data)} onExit={() => setIsModalOpen(false)}/>}

            <main className="recipes">
                <form className="filters" onSubmit={handleSumbit}>
                    <select className="recipes__select" name="category" id="category">
                        <option value="all">Любая категория</option>
                        <option value="breakfast">Завтраки</option>
                        <option value="dinner">Обеды</option>
                        <option value="evening">Ужины</option>
                        <option value="snack">Закуски</option>
                    </select>
                    <select className="recipes__select" name="dish" id="dish">
                        <option value="all">Любое блюдо</option>
                        <option value="lasagna">Лазанья</option>
                        <option value="pizza">Пицца</option>
                        <option value="pasta">Паста</option>
                        <option value="plov">Плов</option>
                    </select>
                    <select className="recipes__select" name="menu" id="menu">
                        <option value="all">Любое меню</option>
                        <option value="diabet">Меню при диабете</option>
                        <option value="vegan">Веганская еда</option>
                        <option value="child">Детское меню</option>
                        <option value="post">Постная еда</option>
                    </select>
                    <select className="recipes__select" name="coisine" id="coisine">
                        <option value="all">Любая кухня</option>
                        <option value="italian">Итальянская</option>
                        <option value="georgian">Грузинская</option>
                        <option value="chinese">Китайская</option>
                        <option value="russian">Русская</option>
                    </select>
                    <button type="button" className="recipes__button" onClick={() => setIsModalOpen(true)}>Ингредиенты</button>
                    <button type="sumbit" className="recipes__button">Подобрать рецепт</button>
                </form>

                <div className="recipes__container">
                    {items.length > 0 ? items : <ItemsPlaceholder/>}
                </div>
            </main>
        </Layout>
    )
}

export default Recipes;