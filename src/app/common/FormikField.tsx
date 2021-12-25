import React from 'react'
import { Field, ErrorMessage } from 'formik'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//Not being used...
//https://www.youtube.com/watch?v=ziWJ4k_3BLk
//is this even necessary?  https://formik.org/docs/api/useFormik


interface FormikFieldProps {
    name: string;
    label: string;
    type?: string;
}



const FormikField = ({ label, name, type = 'text' }: FormikFieldProps) => {

    return (
        <div className="FormikField">

            <Field as={TextField} 
            name={name}
            label={label} variant="outlined"
            type={type}
            helperText={<ErrorMessage name={name} />}
            />
            {/* <TextField id="outlined-basic" label={label} variant="outlined" /> */}
        </div>
    )

}

export default FormikField;