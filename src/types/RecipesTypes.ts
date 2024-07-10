export type RecipesAPIType = {
    totalCount: number,
    pageSize: number,
    currentPage: number,
    totalPages: number,
    items: Array<RecipeType>
}

export type RecipeType = {
    recipeId: number,
    name: string,
    description: string,
    prepTime: string,
    cookTime: string,
    totalTime: string,
    makingAmount: string,
    imageUrl: string,
    ingredients: Array<string>,
    additions1: Array<string>,
    additions2: Array<string>,
    additions3: Array<string>,
    directions: Array<string>,
    tips: string,
}

export interface RecipeListProps {
    recipeId: number
    name: string,
    description: string,
    makingAmount: string,
    totalTime: string,
}

