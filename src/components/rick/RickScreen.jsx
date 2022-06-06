import React, { useContext } from 'react';

import { RickContext } from '../../context/rick-context';


export const RickScreen = () => {

    const { rickData, isRickDataLoading } = useContext(RickContext);

    if(isRickDataLoading === true){
        return <div className="loader"></div>
    }

    return (
        <section className="_main-screen-container">
            <article className="_screen-cards">
                {rickData.map(person$ => (
                    <article key={person$.id} className="_screen-card">
                        <img src={person$.image} alt="pic"/>

                        <div className="_screen-card-info">

                            <div className="screen_h1-status">
                                <h1 className="screen-h1"> {person$.name} </h1>
                                {/* STATUS */}
                                <article className="flotado__status">
                                    <div 
                                        className={`${person$.status === 'Alive' ? '_cards-alive' : '_cards-dead'}`}>
                                    </div>
                                    <span>{person$.status} - { person$.species } </span>
                                </article>

                            </div>
                            
                            <div className="screen_last-seen">
                                <span>Last known location:</span>
                                <p>{person$.location.name}</p>
                            </div>
                            <div className="screen_origin">
                                <span>Origin</span>
                                <p>{person$.origin.name}</p>
                            </div>

                        </div>

                    </article>
                ))}
            </article>
        </section>
    )
}
