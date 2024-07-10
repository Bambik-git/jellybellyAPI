import {useEffect, useState} from "react";
import {RecipeType} from "../../types/RecipesTypes";
import {getRecipes} from "../../API/RecipesAPI";
import {RecipesElement} from "./RecipesElement/RecipesElement";
import s from './Recipes.module.css'

export const Recipes = () => {

    const [recipesData, setRecipesData] = useState<Array<RecipeType>>([])

    useEffect(() => {
        getRecipes().then(res => setRecipesData(res.data.items))
    }, []);
    return (
        <div className={s.container}>
            <h1>Recipes</h1>
            <div className={s.block}>
                {recipesData.map(recipe => <RecipesElement key={recipe.recipeId}
                                                           recipeId={recipe.recipeId}
                                                           description={recipe.description}
                                                           makingAmount={recipe.makingAmount}
                                                           name={recipe.name}
                                                           totalTime={recipe.totalTime}/>)}

            </div>
        </div>
    )
}