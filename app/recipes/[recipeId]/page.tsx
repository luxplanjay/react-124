import { getRecipeById } from "@/api/recipes-api";

type Props = {
  params: Promise<{ recipeId: string }>;
};

export default async function Recipe(props: Props) {
  const { recipeId } = await props.params;
  const recipe = await getRecipeById(recipeId);

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} width="200" />
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

// 1) /recipes
// 2) Клік по /recipes/6
// 3) /recipes/6 > props.params.recipeId (app/recipes/[recipeId])
