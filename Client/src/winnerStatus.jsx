import React from 'react';

const Winner = (props) => {

    if(props.winner)
    return(
        <div> The winner is {props.winner} </div>
    )
    else{
        return(
            <div> </div>
        )
    }

}

export default Winner;