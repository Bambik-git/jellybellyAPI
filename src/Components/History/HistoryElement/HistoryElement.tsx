import React from "react";
import {HistoryType} from "../../../types/HistoryTypes";
import s from './HistoryElement.module.css'

export const HistoryElement:React.FC<HistoryType> = ({year, mileStoneId, description}) => {
    return (
        <div className={s.block_item}>
            <div className={s.year}>
                <p>{year}</p>
            </div>

            <div className={s.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}