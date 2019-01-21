import TextField from '@material-ui/core/TextField';
import React from "react";
import {inject, observer} from 'mobx-react';

export const FirstName = inject('storeX')(observer((props) => {
    const handleOnChange = (event: any) => {
        props.storeX.updateFirstName(event.target.value)
    };

    return <div>
        <TextField
            fullWidth={true}
            autoFocus={true}
            label={'First name'}
            value={props.storeX.firstName}
            onChange={handleOnChange}
        />
    </div>
}));

