import React, { FC } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";

type NewPostProps = {
    addPost(newPostText: string): void;
}
type NewPostValues = {
    newPostText: string;
}

const NewPost: FC<NewPostProps> = (props) => {
    return <NewPostForm addPost={props.addPost} />
}

const NewPostForm: FC<NewPostProps> = (props) => {
    const initialValues: NewPostValues = {
        newPostText: ''
    }

    const onSubmitHandler = (values: NewPostValues, actions: FormikHelpers<NewPostValues>) => {
        console.log({ values, actions });
        props.addPost(values.newPostText);
        actions.resetForm();
        actions.setSubmitting(false);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}  >
            <Form>
                <Field as="textarea" id="newPostText" name="newPostText" />
                <button type="submit">ADD</button>
            </Form>
        </Formik>
    )
}

export default NewPost;
