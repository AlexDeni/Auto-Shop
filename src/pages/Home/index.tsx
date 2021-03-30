import React, {useContext} from "react";
import {Box} from "grommet";
import {observer} from "mobx-react";
import {useStores} from "../../app/use-stores";
import {Button} from "../../ui/Button";
import {UserContext} from "../../app/UserProvider";

export const Home = observer(() => {
    const { UserAuth } = useStores();
    const user = useContext(UserContext);

    return(
        <Box>
            <h2>Home</h2>
            {user.user ? <Button action={()=>UserAuth.signOut()}>Выйти</Button> : null}
        </Box>
    )
})

