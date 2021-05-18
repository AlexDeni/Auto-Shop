import React from 'react'
import {
    ErrorMessage,
} from 'formik';
import styled from "styled-components";
import {Box} from "grommet";

interface IncorrectDataProps{
    name: string,
    message?: string
}

const IncorrectDataStyle = styled.span`
    font-size: 13px;
    color: red;
    text-align: left;
`

export const IncorrectData: React.FC<IncorrectDataProps>  = ({name, message}) => {

    if (message) {
        return <IncorrectDataStyle><ErrorMessage name={name} /></IncorrectDataStyle>
    }

    return <Box>all good</Box>;
}