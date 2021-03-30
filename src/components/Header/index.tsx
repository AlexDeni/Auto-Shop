import React from "react";
import {Box} from "grommet";
import {Navigation} from "../../app/AutorizedNavigation";
import {PROJECT_NAVIGATION} from "../../interfaces/apiEntities";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled(Box)`
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  background-color: #e7e7e78c;
`

const Container = styled(Box)`
  max-width: 1500px;
  padding: 0 15px;
`

const HeaderBlock = styled(Box)`
  min-height: 65px;
`

export const Header = () => {

    return (
        <HeaderStyle>
            <Container>
                <HeaderBlock justify="between" align="center" direction="row">
                    <NavLink to={PROJECT_NAVIGATION.LANDING}>
                        <span>Auto Shop</span>
                    </NavLink>
                    <Navigation />
                </HeaderBlock>
            </Container>
        </HeaderStyle>
    )
}