import React, { FC } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import s from "./NewMessage.module.css";
import * as Yup from "yup";


type NewMessageProps = {
    sendMessage(newMessageText: string): void;
}
type NewMessageValues = {
    newMessageText: string;
}

const NewMessage: FC<NewMessageProps> = (props) => {
    return (
        <NewMessageForm sendMessage={props.sendMessage} />
    )
}

const NewMessageSchema = Yup.object().shape({
    newMessageText: Yup.string()
        .required('')
})

const NewMessageForm: FC<NewMessageProps> = (props) => {
    const initialValues: NewMessageValues = {
        newMessageText: ''
    }

    const onSubmitHandler = (values: NewMessageValues, actions: FormikHelpers<NewMessageValues>) => {
        console.log({ values, actions });
        props.sendMessage(values.newMessageText);
        actions.resetForm();
        actions.setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={NewMessageSchema}
        >
            {({ errors, touched }) => {
                return (
                    <Form className={s.form} >
                        <Field as="textarea" id="newMessageText" name="newMessageText" className={s.field} />

                        { errors.newMessageText && touched.newMessageText
                            ? <div className={`${s.errorMessage}`}>{errors.newMessageText}</div>
                            : null }

                        <button className={s.submitBtn} type="submit">ADD</button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default NewMessage;
