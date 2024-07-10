import axios, {AxiosInstance} from 'axios';
import {CombinationsAPIType} from "../types/CombinationsTypes";

const instanse:AxiosInstance = axios.create( {
    baseURL: 'https://jellybellywikiapi.onrender.com/api/'
})

export const getCombinations = () => {
    return instanse.get<CombinationsAPIType>('Combinations?pageSize=60')
}
