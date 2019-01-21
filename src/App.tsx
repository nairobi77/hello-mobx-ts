import React from 'react';
import './App.css';
import {FirstName} from "./first-name";
import {SecondName} from "./second-name";
import {LastName} from "./last-name";
import {FullName} from "./full-name";
import DevTools from "mobx-react-devtools";
import {FirstNameSuggestions} from "./first-name-suggestions";


class App extends React.Component {
    render() {
        return (
                <div className="App">
                    <FirstName/>
                    <SecondName/>
                    <LastName/>
                    <FullName/>
                    <FirstNameSuggestions/>
                    <DevTools/>
                </div>
        );
    }
}

export default App;
