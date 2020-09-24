import React from 'react';

const trucks = [
    {id: 1, name: "MCT1", location_id: 1},
    {id: 2, name: "MCT2", location_id: 2},
    {id: 3, name: "MCT3", location_id: 1}
];

export default function Location(props) {
    return (<div>
        <div>
            The following trucks are at {props.name}: 
        </div>
        {trucks
            .filter( (truck) => {
                return (truck.id === props.id);
            })
            .map((truck) => {
                return (
                    <div>
                        {truck.name}
                    </div>
                    );
            })
        }
    </div>);
}