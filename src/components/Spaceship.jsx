

function Spaceship(props){
//console.log(props)

    return(
        <div className="shipCard">
            <div className="namePlace">
                <h4>{props.starship.name}</h4>
            </div>
        </div>
    )
}

export default Spaceship