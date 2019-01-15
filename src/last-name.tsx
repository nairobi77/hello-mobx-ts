import TextField from '@material-ui/core/TextField';
import React from "react";
import { observer} from 'mobx-react';
import {store} from "./store";

@observer
export class LastName extends React.Component {
    private handleOnChange(event: any){
        store.updateLastName(event.target.value)
    }

    public render(): React.ReactNode {

        return <div>
            <TextField
                label={'Last name'}
                fullWidth={true}
                value={store.lastName}
                onChange={this.handleOnChange}
            />
        </div>
    }
}
