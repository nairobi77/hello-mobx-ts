import TextField from '@material-ui/core/TextField';
import React from "react";
import { observer} from 'mobx-react';
import {store} from "./store";

@observer
export class SecondName extends React.Component {
    private handleOnChange(event: any){
        store.updateSecondName(event.target.value)
    }

    public render(): React.ReactNode {

        return <div>
            <TextField
                fullWidth={true}
                label={'Second name'}
                value={store.secondName}
                onChange={this.handleOnChange}
            />
        </div>
    }
}
