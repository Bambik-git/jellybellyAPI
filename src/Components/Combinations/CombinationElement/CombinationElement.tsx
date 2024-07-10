import s from './CombinationElement.module.css'
import React from "react";
import {CombinationsType} from "../../../types/CombinationsTypes";

export const CombinationElement:React.FC<CombinationsType> = ({combinationId,name, tag}) => {
    return (
        <div className={s.block_item}>
            <div className={s.name}>
                <p>{name}</p>
            </div>

            <div className={s.tag}>
                <p>{tag.join('')}</p>
            </div>
        </div>
    )
}

