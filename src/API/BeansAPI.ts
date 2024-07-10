import axios, {AxiosInstance} from 'axios';
import {BeanType, GetBeansAPIType} from "../types/BeansTypes";

const instanse:AxiosInstance = axios.create( {
    baseURL: 'https://jellybellywikiapi.onrender.com/api/'
})

export const getBeans = (currentPage: number, searchParams: object) => {
    return instanse.get<GetBeansAPIType>(`Beans?pageSize=9&pageIndex=${currentPage}&${searchParams}`)
}

export const getBeanById = (beanId: string | undefined) => {
    return instanse.get<BeanType>(`/Beans/${beanId}`)
}