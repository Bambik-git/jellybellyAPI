import s from './BeansElement.module.css'
import React from "react";
import {BeanListProps} from "../../types/BeansTypes";
import {Link} from "react-router-dom";

export const BeansElement: React.FC<BeanListProps> = ({flavorName, description, imageUrl, beanId}) => {
    return (
        <div className={s.block}>
            <div className={s.name}>
                <Link to={`/Beans/${beanId}`}>{flavorName}</Link>
            </div>
            <img className={s.image} src={imageUrl} alt="jellybelly_image"/>
            <div className={s.description}>{description}</div>
        </div>
    )
}