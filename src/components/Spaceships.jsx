import React from 'react';
import Spaceship from './Spaceship';

function Spaceships(props){
//console.log(props)


    return(
        <div className="layout">
            <h1>Starships</h1>
            {props.ships.map((starship, key) => { 
                return <Spaceship ship={props.ships} newShip={props.newShip} starship={starship} index={key}/>})
            }
        </div>
    )
}

export default Spaceships