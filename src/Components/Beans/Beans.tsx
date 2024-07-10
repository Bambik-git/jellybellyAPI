import {BeanType} from "../../types/BeansTypes";
import {useEffect, useReducer, useState} from "react";
import s from './Beans.module.css'

import {getBeans} from "../../API/BeansAPI";
import {BeansElement} from "./BeansElement";
import {useSearchParams} from "react-router-dom";


type StringOrNull = string | null

interface State {
    sugarFree: StringOrNull;
    glutenFree: StringOrNull;
    seasonal: StringOrNull;
    kosher: StringOrNull;
    flavorName: StringOrNull;
    groupName: StringOrNull;
    totalCount: number;
    fetching: boolean;
    currentPage: number;
}

type Action =
    | {type: 'sugarFree', payload: StringOrNull}
    | {type: 'glutenFree', payload: StringOrNull}
    | {type: 'seasonal', payload: StringOrNull}
    | {type: 'kosher', payload: StringOrNull}
    | {type: 'flavorName', payload: StringOrNull}
    | {type: 'groupName', payload: StringOrNull}
    | {type: 'totalCount', payload: number}
    | {type: 'fetching', payload: boolean}
    | {type: 'currentPage', payload: number}

const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'sugarFree':
            return {
                ...state,
                sugarFree: action.payload
            }
        case 'glutenFree':
            return {
                ...state,
                glutenFree: action.payload
            }
        case 'seasonal':
            return {
                ...state,
                seasonal: action.payload
            }
        case 'kosher':
            return {
                ...state,
                kosher: action.payload
            }
        case 'flavorName':
            return {
                ...state,
                flavorName: action.payload
            }
        case 'groupName':
            return {
                ...state,
                groupName: action.payload
            }
        case 'totalCount':
            return {
                ...state,
                totalCount: action.payload
            }
        case 'fetching':
            return {
                ...state,
                fetching: action.payload
            }
        case 'currentPage':
            return {
                ...state,
                currentPage: state.currentPage + action.payload
            }
        default:
            return state
    }
}

export const Beans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [beansData, setBeansData] = useState<Array<BeanType>>([])

    const InitialState = {
        sugarFree: searchParams.get('sugarFree'),
        glutenFree: searchParams.get('glutenFree'),
        seasonal: searchParams.get('seasonal'),
        kosher: searchParams.get('kosher'),
        flavorName: searchParams.get('flavorName'),
        groupName: searchParams.get('groupName'),
        totalCount: 0,
        fetching: true,
        currentPage: 1,
    }

    const [state, dispatch] = useReducer(reducer, InitialState)

    useEffect(() => {
        if (state.fetching) {
            getBeans(state.currentPage, searchParams)
                .then(res => {
                    setBeansData([...beansData, ...res.data.items])
                    dispatch({type: 'currentPage', payload: 1})
                    dispatch({type: 'totalCount', payload: res.data.totalCount})
                })
                .finally(() => dispatch({type: 'fetching', payload: false}));
        }
    }, [state.fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = () => {
        if ((document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 200) && (beansData.length <= state.totalCount)) {
            dispatch({type: 'fetching', payload: true})
        }

    }

    const Reset = () => {
        dispatch({type: 'sugarFree', payload: null})
        dispatch({type: 'glutenFree', payload: null})
        dispatch({type: 'seasonal', payload: null})
        dispatch({type: 'kosher', payload: null})
        dispatch({type: 'flavorName', payload: ''})
        dispatch({type: 'groupName', payload: ''})
        dispatch({type: 'fetching', payload: true})

    }

    const groupNames: Array<string> = ['Jelly Belly Official Flavors', 'Kids Mix Flavors', 'Cold Stone® Flavors',
        'Sunkist® Citrus Mix Flavors', 'Superfruit Flavors', 'Sours Flavors', 'Krispy Kreme® Doughnuts Flavors',
        'Soda Pop Shoppe® Flavors', 'Sugar-Free Assorted Flavors', 'Jewel Jelly Beans Flavors',
        'Snapple™ Mix Flavors', 'Cocktail Classics® Flavors', 'Tropical Mix Flavors', 'Boba Milk Tea Flavors']

    return (
        <>
            <h1>Beans</h1>
            <div className={s.container}>
                <div className={s.query_form}>
                    <h3>Filter searching</h3>
                    {state.fetching}
                    <form>

                        <input type="search" name={'flavorName'}
                               onChange={(e) => dispatch({type: 'flavorName', payload: e.target.value})}
                               placeholder={'Name searching'}
                               value={state.flavorName!}/>

                        <div className={s.form_block}>
                            SugarFree:
                            <input type="radio" name="sugarFree"
                                   onChange={() => dispatch({type: 'sugarFree', payload: 'true'})}
                                   value={state.sugarFree!}
                                   checked={state.sugarFree === 'true'}/>
                            <label htmlFor="sugarFree">Yes</label>
                            <input type="radio" name="sugarFree"
                                   onChange={() => dispatch({type: 'sugarFree', payload: 'false'})}
                                   value={state.sugarFree!}
                                   checked={state.sugarFree === 'false'}/>
                            <label htmlFor="sugarFree">No</label>
                        </div>

                        <div className={s.form_block}>
                            GlutenFree:
                            <input type="radio" name="glutenFree"
                                   onChange={() => dispatch({type: 'glutenFree', payload: 'true'})}
                                   value={state.glutenFree!}
                                   checked={state.glutenFree === 'true'}/>
                            <label htmlFor="glutenFree">Yes</label>
                            <input type="radio" name="glutenFree"
                                   onChange={() => dispatch({type: 'glutenFree', payload: 'false'})}
                                   value={state.glutenFree!}
                                   checked={state.glutenFree === 'false'}/>
                            <label htmlFor="glutenFree">No</label>
                        </div>

                        <div className={s.form_block}>
                            Seasonal:
                            <input type="radio" name="seasonal"
                                   onChange={() => dispatch({type: 'seasonal', payload: 'true'})}
                                   value={state.seasonal!}
                                   checked={state.seasonal === 'true'}/>
                            <label htmlFor="seasonal">Yes</label>
                            <input type="radio" name="seasonal"
                                   onChange={() => dispatch({type: 'seasonal', payload: 'false'})}
                                   value={state.seasonal!}
                                   checked={state.seasonal === 'false'}/>
                            <label htmlFor="seasonal">No</label>
                        </div>

                        <div className={s.form_block}>
                            Kosher:
                            <input type="radio" name="kosher"
                                   onChange={() => dispatch({type: 'kosher', payload: 'true'})}
                                   value={state.kosher!}
                                   checked={state.kosher === 'true'}/>
                            <label htmlFor="kosher">Yes</label>
                            <input type="radio" name="kosher"
                                   onChange={() => dispatch({type: 'kosher', payload: 'false'})}
                                   value={state.kosher!}
                                   checked={state.kosher === 'false'}/>
                            <label htmlFor="kosher">No</label>
                        </div>

                        <div className={s.form_block}>
                            <label htmlFor="groupName">Choose a group:</label>
                            <select name="groupName"
                                    onChange={(e) => dispatch({type: 'groupName', payload: e.target.value})}
                                    value={state.groupName!}>
                                <option value={''}>Please choose an group</option>
                                {groupNames.map(name => <option value={name}>{name}</option>)}
                            </select>
                        </div>

                        <input style={{padding:'10px 20px', borderRadius: '20px', cursor: 'pointer'}} type="submit" onClick={() => dispatch({type: 'fetching', payload: true})}
                               value={'Apply'}/><br/><br/>
                        <button style={{padding:'10px 20px', borderRadius: '20px'}} type={'reset'} onClick={Reset}>Reset
                        </button>
                    </form>

                </div>


                <div className={s.block}>

                    {beansData.map(bean => <BeansElement key={bean.beanId}
                                                         beanId={bean.beanId}
                                                         flavorName={bean.flavorName}
                                                         description={bean.description}
                                                         imageUrl={bean.imageUrl}/>)}

                </div>

            </div>
        </>
    )
}