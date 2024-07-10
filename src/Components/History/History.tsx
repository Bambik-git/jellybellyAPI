import {useEffect, useState} from "react";
import {HistoryType} from "../../types/HistoryTypes";
import {getHistory} from "../../API/HistoryAPI";
import s from './History.module.css'
import {HistoryElement} from "./HistoryElement/HistoryElement";

export const History = () => {

    const [historyData, setHistoryData] = useState<Array<HistoryType>>([])

    useEffect(() => {
        getHistory().then(res => setHistoryData(res.data.items))
    }, []);


    return (
        <div className={s.container}>
            <h1>History</h1>
            <div className={s.block}>
                {historyData.map(history => <HistoryElement key={history.mileStoneId}
                                                            mileStoneId={history.mileStoneId}
                                                            description={history.description}
                                                            year={history.year}/>)}
            </div>
        </div>
    )
}