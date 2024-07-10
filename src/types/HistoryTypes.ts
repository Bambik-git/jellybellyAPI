export type HistoryAPIType = {
    totalCount: number,
    pageSize: number,
    currentPage: number,
    totalPages: number,
    items: Array<HistoryType>
}

export type HistoryType = {
    mileStoneId: number,
    year: number,
    description: string,
}



