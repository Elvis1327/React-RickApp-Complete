import React, { useState, useContext } from 'react';

import { RickCards } from './RickCards';
import { RickContext } from '../../context/rick-context';
import { getUserByName } from '../../utils/fetchRick';

export const RickSearch = () => {

    const [ inputState, setInputState ] = useState('');
    const { rickData, isRickDataLoading } = useContext(RickContext);
    
    const personsSearch = getUserByName(inputState, rickData);

    if(isRickDataLoading === true){
        return <div  className="loader"></div>
    }
    return (
        <section className="_search-main-container">
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
        </section>
    )
}
