import data from '../completeData.json';

const getRecipeData = (slug) => {
    const result = data.find(item => item.slug === slug); 
    return result;
}

export default getRecipeData;