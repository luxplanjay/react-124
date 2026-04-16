import axios from "axios";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface GetRecipesResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

export const getRecipes = async () => {
  await new Promise((res) => setTimeout(res, 3000));

  const res = await axios.get<GetRecipesResponse>(
    "https://dummyjson.com/recipes",
  );
  return res.data.recipes;
};

export const getRecipeById = async (recipeId: string) => {
  await new Promise((res) => setTimeout(res, 2000));

  const res = await axios.get<Recipe>(
    `https://dummyjson.com/recipes/${recipeId}`,
  );
  return res.data;
};
