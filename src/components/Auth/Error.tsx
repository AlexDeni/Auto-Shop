import React from "react";
import {useStores} from "../../app/use-stores";
import styled from "styled-components";
import {ErrorMessage} from "formik";
import {Box} from "grommet";


interface ErrorProps{
    name?: string,
    message?: string
}

const ErrorStyle = styled.p`
  
`

export const Error: React.FC<ErrorProps>  = ({name, message}) => {
    const { UserAuth } = useStores();



    if (UserAuth.error.message) {
        console.log('error', UserAuth.error.message)
    }

    return null;
}


//The email address is badly formatted.   Incorrect email or password
//<ErrorStyle><ErrorMessage name="password" render={UserAuth.error.message} /></ErrorStyle>