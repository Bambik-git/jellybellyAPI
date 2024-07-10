export type FactsAPIType = {
    totalCount: number,
    pageSize: number,
    currentPage: number,
    totalPages: number,
    items: Array<FactType>
}

export type FactType = {
    factId: number,
    title: string,
    description: string
}

