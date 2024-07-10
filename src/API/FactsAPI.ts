import axios, {AxiosInstance} from 'axios';
import {FactsAPIType} from "../types/FactsTypes";

const instanse:AxiosInstance = axios.create( {
    baseURL: 'https://jellybellywikiapi.onrender.com/api/'
})

export const getFacts = (currentPage: number) =>{
    return instanse.get<FactsAPIType>(`/Facts?pageSize=30&pageIndex=${currentPage}`)
}
