import React, {useEffect, useState} from "react";
import {RecipeType} from "../../../types/RecipesTypes";
import {Link, useParams} from "react-router-dom";
import {getRecipeById} from "../../../API/RecipesAPI";
import s from './Recipe.module.css'

export const Recipe = () => {

    const [recipeData, setRecipeData] = useState<RecipeType>()

    let {recipeId} = useParams<Record<string, string | undefined>>()

    useEffect(() => {
        getRecipeById(recipeId).then(res => setRecipeData(res.data))
    }, [recipeId]);


    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.name}>
                    <h1>{recipeData?.name}</h1>
                </div>
                <div className={s.description}>
                    <p>{recipeData?.description}</p>
                </div>
                <div className={s.cook_items}>

                    {recipeData?.prepTime ?
                        <div className={s.prepTime}>
                            <p>Preparation time: {recipeData?.prepTime}</p>
                        </div>
                        :
                        ''}

                    {recipeData?.cookTime ?
                        <div className={s.cookTime}>
                            <p>Cook time: {recipeData?.cookTime}</p>
                        </div>
                        :
                        ''
                    }

                    {recipeData?.totalTime ?
                        <div className={s.cookTime}>
                            <p>Total time: {recipeData?.totalTime}</p>
                        </div>
                        :
                        ''
                    }

                    {recipeData?.makingAmount ?
                        <div className={s.cookTime}>
                            <p>Recipe makes: {recipeData?.makingAmount}</p>
                        </div>
                        :
                        ''
                    }

                </div>

                <div className={s.recipe_image}>
                    <img src={recipeData?.imageUrl} alt="recipe"/>
                </div>
                <div className={s.ingredients}>
                    <p><b>Ingredients:</b> {recipeData?.ingredients.map(item => <p> {item} </p>)}</p>
                </div>

                <div className={s.additions1}>
                    <p> {recipeData?.additions1.map(item => item === recipeData?.additions1[0] ?
                        <p><b>{item}</b></p> :
                        <p> {item} </p>)}</p>
                </div>

                <div className={s.directions}>
                    <p><b>Directions</b><br/> {recipeData?.directions.join(' ')}</p>
                </div>

                {recipeData?.tips.length === 0 ?
                    <div className={s.tips}>
                        <p>Tips - {recipeData?.tips}</p>
                    </div>
                    :
                    ''
                }


                <div className={s.link_back}>
                    <Link to={'/Recipes'}>Back to Recipes</Link>
                </div>
            </div>
        </div>

    )
}