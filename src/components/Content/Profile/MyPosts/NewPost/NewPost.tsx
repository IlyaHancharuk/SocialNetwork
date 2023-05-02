import React, { FC } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import s from "./NewPost.module.css";
import * as Yup from "yup";

type NewPostProps = {
    addPost(newPostText: string): void;
}
type NewPostValues = {
    newPostText: string;
}

const NewPost: FC<NewPostProps> = (props) => {
    return <NewPostForm addPost={props.addPost} />
}

const NewPostSchema = Yup.object().shape({
    newPostText: Yup.string()
        .required('')
})

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
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={NewPostSchema}
        >
            {({ errors, touched }) => {
                return (
                    <Form className={s.form} >
                        <Field as="textarea" id="newPostText" name="newPostText" className={s.field} />

                        { errors.newPostText && touched.newPostText
                            ? <div className={`${s.errorMessage}`}>{errors.newPostText}</div>
                            : null }

                        <button className={s.submitBtn} type="submit">ADD</button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default NewPost;
