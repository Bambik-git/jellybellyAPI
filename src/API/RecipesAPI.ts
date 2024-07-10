import axios, {AxiosInstance} from 'axios';
import {RecipesAPIType, RecipeType} from "../types/RecipesTypes";
import {BeanType} from "../types/BeansTypes";

const instanse:AxiosInstance = axios.create( {
    baseURL: 'https://jellybellywikiapi.onrender.com/api/'
})

export const getRecipes = () =>{
    return instanse.get<RecipesAPIType>('/Recipes?pageSize=30')
}

export const getRecipeById = (recipeId: string | undefined) => {
    return instanse.get<RecipeType>(`/Recipes/${recipeId}`)
}