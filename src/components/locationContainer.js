import React from 'react';
import Location from '../components/location'

const locations = [
    {id: 1, name: "home"},
    {id: 2, name: "away"}
];

class LocationContainer extends React.Component {
    submitAction = () => {
        console.log("boobs");
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitAction}>
                    {locations.map((loc) => {
                        return (<Location key={loc.id} name={loc.name} id={loc.id}/>);
                    })}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default LocationContainer;