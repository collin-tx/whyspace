import React from 'react';

const PhilosList = (props) => {
    console.log(props);
    return (
        <div>
            <li className="list-group-item text-center philosopher-card">
                <h2>{props.name}</h2>
                <img src={props.image} alt={"image of " + props.name} className="philosopher-card-img" /><br />
                <i>{props.quote}</i>
                <p>{`${props.dates[0]} - ${props.dates[1]}`}</p>
                <p>Major ideas: {props.ideas[0] + ", " + props.ideas[1]}</p>
            </li>
        </div>
    );
}

export default PhilosList;
