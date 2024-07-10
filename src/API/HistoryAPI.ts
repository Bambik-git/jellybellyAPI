import axios, {AxiosInstance} from 'axios';
import {HistoryAPIType} from "../types/HistoryTypes";

const instanse:AxiosInstance = axios.create( {
    baseURL: 'https://jellybellywikiapi.onrender.com/api/'
})

export const getHistory = () => {
    return instanse.get<HistoryAPIType>('MileStones?pageSize=30')
}