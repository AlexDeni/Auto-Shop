import React, { Component, createContext } from "react";
import { auth } from "../config/firebaseApp";

interface ContextProps {
    readonly user: any;

}

export const UserContext = createContext<ContextProps>({ user: null });
class UserProvider extends Component {

    state = {
        user: null
    };

    componentDidMount = () => {
        auth.onAuthStateChanged((userAuth: any) => {
            this.setState({ user: userAuth});
        });
    };
    render() {

        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;