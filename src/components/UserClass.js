import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1,
        };
        console.log("Child constructor");

    }

    render () {
        console.log("Child render");
        const {name, location} = this.props;
        const {count} = this.state;
        return <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                })
            }}>Click me</button>
        </div>;
    }
}

export default UserClass;