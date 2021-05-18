import React from "react";
import {Box} from "grommet";
import {observer} from "mobx-react";

import {SignOut} from "../../components/Auth/component/SignOut";

export const Home = observer(() => {

    return(
        <Box>
            <h2>Home</h2>
            <SignOut />
        </Box>
    )
})

