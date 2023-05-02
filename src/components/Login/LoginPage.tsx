import React, { FC } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import s from './LoginPage.module.css';
import { LoginPagePropsType } from './LoginPageContainer';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export type LoginValuesType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: boolean;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Minimum 8 symbols!')
        .required('Required'),
})

const LoginForm: FC<LoginPagePropsType> = (props) => {
    const navigate = useNavigate();
    const isError = props.auth.errorMessage.length !== 0;
    const initialValues: LoginValuesType = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: true
    }

    const onSubmit = (values: LoginValuesType, actions: FormikHelpers<LoginValuesType>) => {
        props.login(values);
        actions.resetForm();
        actions.setSubmitting(false);
        setTimeout(() => {
            // иногда нужно повторное нажатие для редиректа, так как флаг не поменялся
            !isError && navigate('/profile/*');
        }, 300);
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={LoginSchema}
        >
            {({ errors, touched }) => {
                return (
                    <Form>
                        <label htmlFor="email">E-mail</label>
                        <Field
                            id="email"
                            name="email"
                            type="email"
                        />
                        {errors.email && touched.email
                            ? (<div className={s.error}>{errors.email}</div>)
                            : null}

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                        />
                        {errors.password && touched.password
                            ? (<div className={s.error}>{errors.password}</div>)
                            : null}
                        {isError
                            ? (<div className={s.error}>{props.auth.errorMessage}</div>)
                            : null}
                        
                        <div className={s.remberMeContainer}>
                            <label htmlFor="rememberMe">Remember me</label>
                            <Field
                                id="rememberMe"
                                name="rememberMe"
                                type="checkbox"
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }}
        </Formik>
    );
};

export const LoginPage: FC<LoginPagePropsType> = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login} auth={props.auth} />
        </div>
    )
}



export default LoginPage;
