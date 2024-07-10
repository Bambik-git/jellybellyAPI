import s from './Combinations.module.css'
import {useEffect, useState} from "react";
import {CombinationsType} from "../../types/CombinationsTypes";
import {getCombinations} from "../../API/CombinationsAPI";
import {CombinationElement} from "./CombinationElement/CombinationElement";

export const Combinations = () => {

    const [combinationsData, setCombinationsData] = useState<Array<CombinationsType>>([])

    useEffect(() => {
        getCombinations().then(res => setCombinationsData(res.data.items))
    }, []);

    return (
        <div className={s.container}>
            <h1>Combinations</h1>
            <div className={s.block}>
                {combinationsData.map(combination => <CombinationElement key={combination.combinationId}
                                                                         combinationId={combination.combinationId}
                                                                         name={combination.name}
                                                                         tag={combination.tag}/>)}
            </div>
        </div>
    )
}