import React from "react";
import { observer} from 'mobx-react';
import {store} from "./store";
import Button from '@material-ui/core/Button';


@observer
export class FirstNameSuggestions extends React.Component {

    public render() {
        const suggestions = store.firstNameSuggestions
            .map(suggestion =>
                <Button
                    key={suggestion.value}
                    fullWidth={true}
                    onClick={_ => this.choseSuggestion(suggestion.value)}
                >
                    {suggestion.value}
                </Button>);
        return (<div>{suggestions}</div>);
    }

    private choseSuggestion(name: string) {
        store.choseSuggestion(name);
    }
}
