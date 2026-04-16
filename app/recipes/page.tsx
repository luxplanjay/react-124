import { getRecipes } from "@/api/recipes-api";
import Link from "next/link";

export default async function Recipes() {
  const recipes = await getRecipes();

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
