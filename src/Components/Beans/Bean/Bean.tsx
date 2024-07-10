import s from './bean.module.css'
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getBeanById} from "../../../API/BeansAPI";
import {BeanType} from "../../../types/BeansTypes";


export const Bean = () => {
    const [beanData, setBeanData] = useState<BeanType>()

    let {beanId} = useParams<Record<string, string | undefined>>()

    useEffect(() => {
        getBeanById(beanId).then(res => setBeanData(res.data))
    }, [beanId]);

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.flavorName}>
                    <h1>{beanData?.flavorName}</h1>
                </div>
                <div className={s.description}>
                    <h3>{beanData?.description}</h3>
                </div>
                <div className={s.image}>
                    <img src={beanData?.imageUrl} alt={'bean_image'}/>
                </div>


                <div className={s.group}>
                    <p>Group Name:</p>
                    <p>{beanData?.groupName.join(', ')}</p>
                </div>
                <div className={s.ingredients}>
                    <p>Ingredients:</p>
                    <p>{beanData?.ingredients.join(', ')}</p>
                </div>
                <div className={s.grid}>
                    <div className={s.grid_wrapper}>
                        <p>Color group:</p>
                        <p>{beanData?.colorGroup}</p>
                    </div>

                    <div className={s.grid_wrapper}>
                        <p>Hexadecimal group:</p>
                        <p>{beanData?.backgroundColor}</p>
                    </div>

                    <div className={s.grid_wrapper}>
                        <p>Bean ID:</p>
                        <p>{beanData?.beanId}</p>
                    </div>

                    <div className={s.grid_wrapper}>
                        <p>Kosher:</p>
                        <p>{beanData?.kosher ? 'yes' : 'no'}</p>
                    </div>

                    <div className={s.grid_wrapper}>
                        <p>Seasonal:</p>
                        <p>{beanData?.seasonal ? 'yes' : 'no'}</p>
                    </div>

                    <div className={s.grid_wrapper}>
                        <p>Gluten Free:</p>
                        <p>{beanData?.glutenFree ? 'yes' : 'no'}</p>
                    </div>

                    <div className={s.grid_wrapper}>
                        <p>Sugar Free:</p>
                        <p>{beanData?.sugarFree ? 'yes' : 'no'}</p>
                    </div>
                </div>

                <div className={s.link_back}>
                    <Link to={'/Beans'}>Back to Beans</Link>
                </div>
            </div>
        </div>

    )
}