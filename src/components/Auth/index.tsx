import React, {useContext} from "react";
import {Box} from "grommet";
import {useHistory} from "react-router";
import config from './config.json';
import {Formik, Form } from 'formik';
import {SignInSchema, SignUpSchema} from "./validation";
import {Button} from "../../ui/Button";
import { IncorrectData} from "./IncorrectData";
import {useStores} from "../../app/use-stores";
import {Input} from "../../ui/Input";
import {UserContext} from "../../app/UserProvider";
import {PROJECT_NAVIGATION} from "../../interfaces/apiEntities";
import {Error} from "./Error";

type TAuthTypes = 'login' | 'auth'

interface IAuthFormProps {
    authType: TAuthTypes
    handleBlur?: object
    handleChange?: () => void
    handleSubmit?: () => void
    errors?: object
    touched?: object
    values?: any
}

interface FormValues {
    email?: string,
    login?: string,
    password?: string,
    confirmPassword?: string,
}

export const AuthForm: React.FC<IAuthFormProps> = ({authType }) => {
    let history = useHistory();
    const user = useContext(UserContext);
    const { UserAuth } = useStores();

    const initialValues: FormValues = { email: '',  login: '', password: '', confirmPassword: '' };



    const handleClick = (values:FormValues):void => {
        let login:any = values.login
        let password:any = values.password

        if(authType === "login"){
            UserAuth.signIn(login, password)
        }
        UserAuth.signUp(login, password)

    }

    if(user.user){
        history.push(PROJECT_NAVIGATION.LANDING)
    }

    return (
        <Box justify="center" align="center">
            {config[authType].map((data, i) => (
                <Formik
                    key={data.title}
                    initialValues={initialValues}
                    validationSchema={authType === 'login' ? SignInSchema : SignUpSchema}
                    onSubmit={(values: FormValues) => {
                        console.log('valuesvalues', values)
                    }}
                >
                    {({handleBlur, handleChange,handleSubmit, errors, values}:IAuthFormProps) => (
                        <Form onSubmit={handleSubmit} style={{textAlign:"center"}}>
                            <h3>{data.title}</h3>
                            {data.input.map((item, key)=>{
                                const { type, placeholder, name } = item;
                                return(
                                    <Box key={key}>
                                        <Input
                                            type={type}
                                            placeholder={placeholder}
                                            name={name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <IncorrectData name={name} message={errors} />
                                    </Box>
                                )
                            })}
                            <Button action={()=>handleClick(values)} type="submit">{data.buttonTitle}</Button>
                            <Error />
                        </Form>
                    )}
                </Formik>
            ))}
        </Box>
    )
}