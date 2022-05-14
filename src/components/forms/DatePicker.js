import * as React from 'react';
import TextField from '@mui/material/TextField';

function DatePicker(props) {
    // prevent user to select past date
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <TextField
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            variant="standard"
            type="date"
            inputProps={{ min: disablePastDate() }}
        />
    );
}

export default DatePicker;
