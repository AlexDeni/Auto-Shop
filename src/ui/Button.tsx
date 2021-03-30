import React from "react";
import styled from "styled-components";

type TButtonTypes = 'button' | 'reset' | 'submit'

type TButtonSize = 's' | 'm' | 'l'

interface IButtonProps {
    type?: TButtonTypes,
    action?: () => void,
    disable?: boolean,
    style?: string,
    children: React.ReactNode,
    size?: TButtonSize
}

interface IStyledButtonProps {
    fontSize?: string;
    bordered?: boolean;
    bgHoverColor?: string;
    transparent?: boolean;
    width?: string
}

const StyledButton = styled.button<IStyledButtonProps & any>`
  position: relative;
  font-size: ${props => props.fontSize || '15px'};
  line-height: ${props => props.lineHeight || '16px'};
  font-weight: ${props => props.fontWeight || '500'};
  border: ${props => (props.bordered || 'none')};
  padding: ${props => (props.padding || '12px 25px')};
  background: ${props => (props.background || '#f2105a')};
  color: ${props => (props.color || '#ffffff')};
  box-sizing: border-box;
  outline: none;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  box-shadow: 0 2px 4px #626b72;
  text-transform: uppercase;
  margin: 20px;
  width: fit-content;
  &:hover{
    background-color: ${props => (props.background || '#f44336')};
  }
`

export const Button: React.FC<IButtonProps> = ({style, action, type = 'button', children, disable, ...other}) => {

    return(
        <StyledButton
            onClick={action}
            disabled={disable}
            type={type}
            {...other}
        >
            {children}
        </StyledButton>
    )
}