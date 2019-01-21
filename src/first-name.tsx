import TextField from '@material-ui/core/TextField';
import React from "react";
import {inject, observer} from 'mobx-react';
// import {store} from "./store";

//
// @observer
// export class FirstName extends React.Component {
//
//     handleOnChange = (event: any) => {
//         store.updateFirstName(event.target.value)
//     };
//
//     render(): React.ReactNode {
//
//         return <div>
//             <TextField
//                 fullWidth={true}
//                 autoFocus={true}
//                 label={'First name'}
//                 value={store.firstName}
//                 onChange={this.handleOnChange}
//             />
//         </div>
//     }
//
//
// }



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

