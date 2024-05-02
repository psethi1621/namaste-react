import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                name: "Dummy",
                location: "Default",
            }
        }
        // console.log(this.props.name + ": Child constructor");

    }

    render () {
        const {name, location, login} = this.state.userInfo;
        // console.log(name+": Child render");
        return <div className="user-card">
            <h1>Name : {name}</h1>
            <h1>location : {location}</h1>
            <h1>Username: {login} </h1>
        </div>;
    }

    async componentDidMount() {
        // console.log(this.props.name+": Child didMount");
        const data =  await fetch("https://api.github.com/users/psethi1621");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : json,
        })

    }
}

export default UserClass;