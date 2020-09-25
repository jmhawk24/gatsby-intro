import React from 'react';

class Checkbox extends React.Component {
    constructor() {
        super()
        this.state = {checked: false}
    }

    componentDidUpdate(prevProps) {
        if (this.state.checked !== prevProps.checked) {
            console.log("NEW state: " + this.state.checked)
        }
    }

    doCheck = () => {
        console.log("old state: " + this.state.checked);
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <div>
                <input type="checkbox"
                checked={this.state.checked}
                onChange={this.doCheck}/>
            </div>
        )
    }
};

export default Checkbox;