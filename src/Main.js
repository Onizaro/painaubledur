import React from 'react';


const Main = (props) => {
    return (
        <div className='main'>
            <h2>{props.nom}</h2>
            <img alt={props.nom} src={props.image} />
        </div>
    );
};

export default Main
