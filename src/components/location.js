import React from 'react';
import Checkbox from './utility/checkbox'

const trucks = [
    {id: 1, name: "MCT1", location_id: 1},
    {id: 2, name: "MCT2", location_id: 2},
    {id: 3, name: "MCT3", location_id: 1}
];

export default function Location(props) {
    return (<div>
        <h3>
            The following trucks are at {props.name}: 
        </h3>
        {trucks
            .filter( (truck) => {
                return (truck.location_id === props.id);
            })
            .map((truck) => {
                return (
                    <div key={truck.id}>
                        <Checkbox  />
                        {truck.name}
                    </div>
                    );
            })
        }
    </div>);
}