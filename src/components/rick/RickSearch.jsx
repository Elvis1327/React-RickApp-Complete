import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../../actions/rick';
import { RickCards } from './RickCards';

export const RickSearch = () => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector(state => state.rick);
    const [ inputState, setInputState ] = useState('')

    useEffect(() => {
        dispatch(getDataAsync())
    },[dispatch]);

    const filterData = (name) => {
        const info = data.filter(resp => resp.name.toLowerCase().includes(name.toLowerCase()))
        if(name.length === 0){
            return data;
        }else{
            return info
        }
    }
    const personsSearch = filterData(inputState);

    if(loading === true){
        return <div  className="loader"></div>
    }
    return (
        <div className="_search-main-container">
            <div className="_search__main-container">
                <input 
                    type="text" 
                    placeholder="Introduce the name of the person"
                    className="input__search form-control"
                    name="buscar"
                    onChange={(e) => setInputState(e.target.value)}
                />
            </div>
            <div className="component_cards">
                <RickCards dataSearch={personsSearch} />
            </div>
        </div>
    )
}
