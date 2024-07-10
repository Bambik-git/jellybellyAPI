import {FactType} from "../../types/FactsTypes";
import {useEffect, useState} from "react";
import {getFacts} from "../../API/FactsAPI";
import {FactsElement} from "./FactsElement/FactsElement";
import s from './Facts.module.css'

export const Facts = () => {

    const [factsData, setFactsData] = useState<Array<FactType>>([])
    const [fetching, setFetching] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        if (fetching){
            getFacts(currentPage).then(res => {
                setFactsData([...factsData, ...res.data.items])
                setCurrentPage(cur => cur + 1)
                setTotalCount(res.data.totalCount)
            }).finally(()=> setFetching(false))
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = () => {
        if ((document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 150) && (factsData.length <= totalCount)) {
            setFetching(true)
        }

    }


    return (
        <div className={s.container}>
            <h1>Facts</h1>
            <div className={s.block}>
                {factsData.map(fact => <FactsElement key={fact.factId}
                                                     factId={fact.factId}
                                                     title={fact.title}
                                                     description={fact.description}/>)}

            </div>
        </div>
    )
}