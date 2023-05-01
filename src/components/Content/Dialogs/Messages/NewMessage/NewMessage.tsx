import React, { FC } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";

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
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler} >
            <Form>
                <Field as="textarea" id="newMessageText" name="newMessageText" />
                <button type="submit">SEND</button>
            </Form>
        </Formik>
    )
}

export default NewMessage;
