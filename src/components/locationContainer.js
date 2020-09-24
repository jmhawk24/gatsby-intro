import React from 'react';
import Location from '../components/location'

const locations = [
    {id: 1, name: "home"},
    {id: 2, name: "away"}
];

export default function LocationContainer() {
    return (
    <div>
        {locations.map((loc) => {
            return (<Location name={loc.name} id={loc.id}/>);
        })}
    </div>
    );
}