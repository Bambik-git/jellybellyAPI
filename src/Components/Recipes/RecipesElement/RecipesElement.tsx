import React from "react";
import {RecipeListProps} from "../../../types/RecipesTypes";
import s from './RecipesElement.module.css'
import {Link} from "react-router-dom";

export const RecipesElement:React.FC<RecipeListProps> = ({recipeId, name, totalTime, makingAmount, description}) => {
    return (
        <div className={s.block_item}>
            <div className={s.title}>
                <p>{name}</p>
            </div>
            <div className={s.description}>
                <p>{description}</p>
            </div>
            <div>
                {makingAmount ?
                    <div className={s.makingAmount}>Make: {makingAmount}</div>
                    :
                    ''
                }
            </div>
            <div>
                {totalTime ?
                    <div className={s.totalTime}>Total time: {totalTime}</div>
                    :
                    ''
                }
            </div>

            <div className={s.recipe_link}>
                <Link to={`/Recipes/${recipeId}`}>Check out this recipe</Link>
            </div>
        </div>
    )
}