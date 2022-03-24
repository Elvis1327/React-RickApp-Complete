import React from 'react'

export const RickCards = ({dataSearch}) => {
    return (
        // TODAS LAS CARDS
        <div className="_cards-cards animate__animated animate__fadeIn">
            {dataSearch.map(person => (
                    // 1 CARD
                    <div className="_cards-card" key={person.id}>
                        <div className="card__card-image">
                            <img src={person.image} alt="pic" className="_cards-image" />
                        </div>
                        {/* CONTENEDOR DE LA INFORMACION DE LA DERECHA CARD */}
                        <div className="_cards-card-info">
                            <div className="_cards-name-status">
                                <h1> {person.name} </h1>
                                {/* FLOTADO STATUS */}
                                <div className="flotado__status">
                                    <div 
                                        className={`${(person.status === 'Alive') ? '_cards-alive' : '_cards-dead'}`}>
                                    </div>
                                    <span>{person.status} - { person.species } </span>
                                </div>
                            </div>
                            {/* LAS LOCATION */}
                            <div className="cards__last-location">
                                <span className="last__location-span">Last known location:</span>
                                <p className="last__location-hover"> {person.location.name} </p>
                            </div>
                            <div className="cards__first-seen">
                                <span className="first-seen-span">First seen in:</span>
                                <div className="first-seen-p">{person.origin.name}</div>
                            </div>
                        </div>
                    </div>
            ))}
            {dataSearch.length === 0 &&
                <div className="alert alert-danger alerta-noperson" role="alert">
                    No hay personajes con este nombre
                </div>

            }
        </div>
    )
}
