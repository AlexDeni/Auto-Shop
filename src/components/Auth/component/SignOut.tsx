import React, {useContext} from "react";
import {Box} from "grommet";
import {observer} from "mobx-react";
import {useStores} from "../../../app/use-stores";
import {UserContext} from "../../../app/UserProvider";
import {Button} from "../../../ui/Button";


export const SignOut = observer(() => {
    const { UserAuth } = useStores();
    const user = useContext(UserContext);

    return(
        <Box>
            {user.user ? <Button action={()=>UserAuth.signOut()}>Выйти</Button> : null}
        </Box>
    )
})

