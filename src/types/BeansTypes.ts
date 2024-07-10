export type GetBeansAPIType = {
    totalCount: number,
    pageSize: number,
    currentPage: number,
    totalPages: number,
    items: Array<BeanType>
}

export type BeanType = {
    beanId: number,
    groupName: Array<string>,
    ingredients: Array<string>,
    flavorName: string,
    description: string,
    colorGroup: string,
    backgroundColor: string,
    imageUrl: string,
    glutenFree: boolean,
    sugarFree: boolean,
    seasonal: boolean,
    kosher: boolean,
}

export interface BeanListProps {
    beanId: number
    flavorName: string,
    description: string,
    imageUrl: string,
}

