import * as Yup from 'yup';

const passwordValidation = () => {
    return Yup.string()
        .min(6, '*Пароль должен  быть больше 6 символов')
        .max(30, '*Слишком большой')
        //.matches(/[A-z\u00C0-\u00ff]+/, 'Доступны только латинские символы')
        .required('*Обязательное поле');
};

const confirmPasswordValidation = () => {
    return Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
        .required('*Обязательное поле')
        .min(6, '*Пароль должен  быть больше 6 символов')
        .max(30, '*Слишком большой');
};

const emailValidation = () => {
    return Yup.string()
        .email('*Некоректный адрес электронной почты')
        .max(30, '*Слишком большой')
        .required('*Обязательное поле');
};

const nameValidation = () => {
    return Yup.string()
        .min(4, '*Поле должно  быть больше 4 символов')
        .max(30, '*Слишком длинный')
        .required('*Обязательное поле');
};

export const SignInSchema = Yup.object().shape({
    login: nameValidation(),
    password: passwordValidation(),
});

export const SignUpSchema = Yup.object().shape({
    fullName: nameValidation(),
    login: nameValidation(),
    email: emailValidation(),
    password: passwordValidation(),
    confirmPassword: confirmPasswordValidation(),
});