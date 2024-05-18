const API_KEY = 'c46e227fc17b4e01b9d25ca715a8d771';
export const fetchRecipes = async (searchQuery) => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchQuery}`
    );
    const data = await res.json();
    return data?.results || [];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchRecipeDetail = async (id) => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    const info = await res.json();
    return info;
  } catch (error) {
    console.log(error);
    return null;
  }
};
