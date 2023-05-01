import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { LoginPagePropsType } from './LoginPageContainer';

export type LoginValuesType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: boolean;
}

const LoginForm: FC<LoginPagePropsType> = (props) => {

    const initialValues: LoginValuesType = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: true
    }

    const onSubmit = (values: LoginValuesType, actions: FormikHelpers<LoginValuesType>) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        props.login(values)
        actions.setSubmitting(false);
    }

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <Form>
                <label htmlFor="email">E-mail</label>
                <Field
                    id="email"
                    name="email"
                    type="text"
                />

                <label htmlFor="password">Password</label>
                <Field
                    id="password"
                    name="password"
                    type="text"
                />

                <label htmlFor="rememberMe">Remember me</label>
                <Field
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export const LoginPage: FC<LoginPagePropsType> = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login} />
        </div>
    )
}



export default LoginPage;
