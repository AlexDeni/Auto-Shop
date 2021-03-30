import React from "react";
import styled from "styled-components";
import {Box} from "grommet";

type TInputTypes = 'button' | 'password' | 'text' | 'submit' | 'radio' | 'checkbox'

interface IInputProps {
    type?: TInputTypes | string,
    disable?: boolean,
    style?: string,
    children?: string,
    placeholder?: string,
    label?: string,
    setTouched?: any,
    id?: string | number,
    onBlur?: object,
    onFocus?: object,
    onChange?: () => void,
    disabled?: boolean,
    autoComplete?: string,
    onKeyPress?: () => void,
    error?: string,
    name?: string,
    values?: any
}

interface IStyledInputProps {
    fontSize?: string;
    bordered?: boolean;
    bgHoverColor?: string;
    transparent?: boolean;
    width?: string
}

const StyledInput = styled.input<IStyledInputProps & any>`
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #bcbcbc;
  color: #3f3d3d;
  margin-top: 24px;
  width: 300px;
  padding-bottom: 5px;
`

const InputContainer = styled(Box)`
  position: relative;
`

export const Input: React.FC<IInputProps> = ({setTouched,values,name, error, onChange,placeholder,autoComplete,onFocus,disabled,onBlur,label, type = 'text', children, ...props}) => {

    /*const [focused, setFocused] = React.useState(false)

    const handleOnFocus = () => {
        setFocused(true)
    }

    const handleOnBlur = (e:any) => {
        setFocused(false)
        onBlur(e)
    }

    const renderLabel = () => {
        if (label) {
            if (error) {
                return <label>{ error }</label>
            }
            return <label>{ label }</label>
        }
        return null
    }*/
    return(
        <InputContainer>
            <StyledInput
                type={type}
                name={name}
                value={children}
                onBlur={onBlur}
                //onFocus={handleOnFocus}
                disabled={disabled}
                autoComplete={autoComplete}
                placeholder={placeholder}
                onChange={onChange}
                style={error && {border: 'solid 1px red'}}
                {...props}
            />
        </InputContainer>
    )
}