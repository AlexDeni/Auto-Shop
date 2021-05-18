import React from "react";
import {Box} from "grommet";

interface IProjectCardProps {
    store: object
    customCard?: {}
}

export const ProjectCard = ({store, customCard}: IProjectCardProps) => {


    console.log('store', store)
    return(
        <Box>
            12345
        </Box>
    )
}