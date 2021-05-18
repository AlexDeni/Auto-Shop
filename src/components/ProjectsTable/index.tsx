import React from "react";
import {Box} from "grommet";
import {observer} from "mobx-react";
import { ProjectCard } from "../../ui/ProjectCard";

interface IProjectsTableProps{
    store: object
    customCard?: {}
}

export const ProjectsTable = observer(({
    store,
    customCard,
    }:IProjectsTableProps) => {

    return (
        <>
            {!store ?
                <Box>
                    'Данных не найденно'
                </Box> : null}
            <ProjectCard
                store={store}
                customCard={customCard}
            />
        </>
    )
})