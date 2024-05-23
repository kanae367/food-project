import data from '../largeData.json';

const getRecipeData = (slug) => {
    const result = data.find(item => item.slug === slug); 
    return result;
}

export default getRecipeData;