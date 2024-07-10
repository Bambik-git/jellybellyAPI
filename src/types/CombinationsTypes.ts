export type CombinationsAPIType = {
    totalCount: number,
    pageSize: number,
    currentPage: number,
    totalPages: number,
    items: Array<CombinationsType>
}

export type CombinationsType = {
    combinationId: number,
    name: string,
    tag: Array<string>
}


