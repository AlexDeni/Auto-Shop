import React, {useContext} from "react";
import {Box} from "grommet";
import {Link} from "react-router-dom";
import { PROJECT_NAVIGATION } from '../interfaces/apiEntities';
import {observer} from "mobx-react";
import styled from "styled-components";
import {UserContext} from "./UserProvider";

const HeaderBoxLink = styled(Box)`
  &>a{
    text-decoration: none;
    color: #f2105a;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
  }
`

export const Navigation = observer(() => {
    const user = useContext(UserContext);

    return(
        <Box>
            {user.user ?
                <NavigationIn /> : <NavigationAuth />
            }
        </Box>
    )
})

const NavigationIn = () => (
    <HeaderBoxLink direction="row">
        <Link to={PROJECT_NAVIGATION.MYAUTO}>My auto</Link>
        <Link to={PROJECT_NAVIGATION.ACCOUNT}>Account</Link>
    </HeaderBoxLink>
)

const NavigationAuth= () => (
    <HeaderBoxLink direction="row">
        <Link to={PROJECT_NAVIGATION.SIGN_IN}>Sign In</Link>
        <Link to={PROJECT_NAVIGATION.SIGN_UP}>Sign up</Link>
    </HeaderBoxLink>
)


