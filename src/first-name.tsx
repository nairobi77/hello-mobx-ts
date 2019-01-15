import TextField from '@material-ui/core/TextField';
import React from "react";
import {inject, observer} from 'mobx-react';
import {store} from "./store";

@inject()
@observer
export class FirstName extends React.Component {
    private handleOnChange(event: any){
        store.updateFirstName(event.target.value)
    }

    public render(): React.ReactNode {

        return <div>
            <TextField
                fullWidth={true}
                autoFocus={true}
                label={'First name'}
                value={store.firstName}
                onChange={this.handleOnChange}
            />
        </div>
    }
}
