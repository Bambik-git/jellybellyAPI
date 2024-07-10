import React from "react";
import {FactType} from "../../../types/FactsTypes";
import s from './FactsElement.module.css'

export const FactsElement: React.FC<FactType> = ({factId, description, title}) => {
    return (
        <div className={s.block_item}>
            <div className={s.title}>{factId}.{title}</div>
            <div className={s.description}>{description}</div>
        </div>
    )
}