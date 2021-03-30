import React from "react";
import {Box} from "grommet";
import {observer} from "mobx-react";
import {AuthForm} from "../../components/Auth";

export const SignIn = observer(() => {
    return(
        <Box>
            <AuthForm authType="login"  />
        </Box>
    )
})
