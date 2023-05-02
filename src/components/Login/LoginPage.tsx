import React, { FC } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import s from './LoginPage.module.css';
import { LoginPagePropsType } from './LoginPageContainer';
import * as Yup from 'yup';

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

    const initialValues: LoginValuesType = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: true
    }

    const onSubmit = (values: LoginValuesType, actions: FormikHelpers<LoginValuesType>) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        props.login(values);
        actions.resetForm();
        actions.setSubmitting(false);
    }

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={LoginSchema}
        >
            {({ errors, touched }) => {
                return <Form>
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
                        type="text"
                    />
                    {errors.password && touched.password
                        ? (<div className={s.error}>{errors.password}</div>)
                        : null}

                    <label htmlFor="rememberMe">Remember me</label>
                    <Field
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                    />
                    <button type="submit">Submit</button>
                </Form>
            }}
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
