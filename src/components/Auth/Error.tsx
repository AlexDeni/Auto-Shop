import React from "react";
import {useStores} from "../../app/use-stores";
import styled from "styled-components";
import {ErrorMessage} from "formik";


interface ErrorProps{
    name?: string,
    message?: object
}

const ErrorStyle = styled.p`
  
`

export const Error: React.FC<ErrorProps>  = ({name, message}) => {
    const { UserAuth } = useStores();


    console.log('err', UserAuth.error)

    if (UserAuth.error) {

        /**/
        return <ErrorStyle><ErrorMessage name="password" render={UserAuth.error.message} /></ErrorStyle>
    }

    return null;
}


//The email address is badly formatted.   Incorrect email or password