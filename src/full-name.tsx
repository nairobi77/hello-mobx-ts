import TextField from '@material-ui/core/TextField';
import React from "react";
import { observer} from 'mobx-react';
import {store} from "./store";

@observer
export class FullName extends React.Component {

    public render(): React.ReactNode {

        return <div>
            <TextField
                fullWidth={true}
                label={'Full name'}
                value={store.fullName}
            />
        </div>
    }
}
