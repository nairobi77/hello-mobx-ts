import React from "react";
import {inject, observer} from 'mobx-react';
import Button from '@material-ui/core/Button';
import {NameSuggestion} from "./dadata-service";
import {MobxState} from "./store";


export const FirstNameSuggestions = inject('storeX')(observer((props) => {
    return (<div>{suggestions(props.storeX)}</div>);
}));

const choseSuggestion = (name: string, storeX: MobxState) => {
    storeX.choseSuggestion(name);
}

const suggestions = (storeX: MobxState) => storeX.firstNameSuggestions
    .map((suggestion: NameSuggestion) =>
        <Button
            key={suggestion.value}
            fullWidth={true}
            onClick={_ => choseSuggestion(suggestion.value, storeX)}
        >
            {suggestion.value}
        </Button>
    );
