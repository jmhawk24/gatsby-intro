import React from 'react';
import Finished from './finished';

class Truck extends React.Component {
    constructor(props) {
        super();
        this.state = {currentLocation: 0, inTransit: 0}

        this.moveToTransit = this.moveToTransit.bind(this);
        this.moveOutOfTransit = this.moveOutOfTransit.bind(this);
        this.finishTransit = this.finishTransit.bind(this);
    }

    moveToTransit(e) {
        e.preventDefault();
        this.setState(state => ({
            inTransit: 1
        }));
        console.log(this.state.inTransit);
    }

    moveOutOfTransit(e) {
        e.preventDefault();
        this.setState(state => ({
            inTransit: 0
        }));
        console.log(this.state.inTransit);
    }

    finishTransit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div class="">
                {this.props.name}
                <div> 
                    Move To: 
                    <select>
                        <option>Homie</option>
                        <option>Foe</option>
                    </select>
                </div>
                <button type="submit" onClick={this.moveToTransit} >
                    Start Transit
                </button>
                <button onClick={this.finishTransit}>
                    Finish Transit
                </button>
                <button onClick={this.moveOutOfTransit} >
                    Cancel
                </button>
                <Finished />

            </div>
        );
    }
}

export default Truck;