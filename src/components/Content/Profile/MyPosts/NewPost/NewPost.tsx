import React, { FC } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";

type NewPostProps = {
    //newPostText: string;
    addPost(): void;
    changePostText(text: string): void;
}

const NewPost: FC<NewPostProps> = (props) => {
    // const addPost = () => {
    //     props.addPost();
    // }
    // const changePostText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    //     const postMessage = e.currentTarget.value;
    //     props.changePostText(postMessage);
    // }

    return (
        <NewPostForm addPost={props.addPost} changePostText={props.changePostText} />
        // <div className={s.newPost}>
        //     <textarea
        //         value={props.newPostText}
        //         onChange={changePostText}
        //         placeholder="Enter post message"
        //     ></textarea>
        //     <button onClick={addPost}>SEND</button>
        // </div>
    )
}


type NewPostValues = {
    newPostText: string;
}

const NewPostForm: FC<NewPostProps> = (props) => {
    const initialValues: NewPostValues = {
        newPostText: ''
    }

    const onSubmitHandler = (values: NewPostValues, actions: FormikHelpers<NewPostValues>) => {
        console.log({ values, actions });
        props.changePostText(values.newPostText);
        props.addPost();
        actions.resetForm();
        actions.setSubmitting(false);

    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}  >
            <Form>
                <Field as="textarea" id="newPostText" name="newPostText" />
                <button type="submit"  >SEND</button>
            </Form>
        </Formik>
    )
}

export default NewPost;
