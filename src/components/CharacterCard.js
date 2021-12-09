import React from 'react'

export default function CharacterCard({character}) {
    const {name, gender, image} = character



    return (
        <div>
            <h2>{name}</h2>
            <div>
                <img src={image} alt={name}/>
            </div>
            <p>{gender}</p>
        </div>
    )
}
