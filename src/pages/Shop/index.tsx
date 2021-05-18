import React, {useEffect} from "react";
import {Box} from "grommet";
import {ProjectsTable} from "../../components/ProjectsTable";
import {observer} from "mobx-react";
import {useStores} from "../../app/use-stores";

interface ShopProps {

}

export const Shop = observer(() => {
    const { AutoList } = useStores();

    useEffect(()=>{
        AutoList.getAllAuto()
    })

    return(
        <Box>
            <h2>Shop</h2>
            <ProjectsTable
                store={AutoList.autoData}
            />
        </Box>
    )
})