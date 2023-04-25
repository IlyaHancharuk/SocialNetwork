import React from "react";
import MyPosts from "./MyPosts";
import { addPostAC, changeNewPostTextAC } from "../../../../Redux/redusers/profileReduser";
import { connect } from "react-redux";
import { AppStateType } from "../../../../Redux/redux-store";
import { Dispatch } from "redux";
import { ProfilePageType } from "../../../../types";

// export type MyPostsContainerPropsType = {
//     store: ReduxStoreType;
// }

// const MyPostsContainer: FC<MyPostsContainerPropsType> = ({ store }) => {
//     const state = store.getState();

//     const addPost = () => {
//         store.dispatch(addPostAC());
//     }
//     const changePostText = (postMessage: string) => {
//         store.dispatch(changeNewPostTextAC(postMessage));
//     }

//     return (
//         <MyPosts
//             state={state.profilePage}
//             addPost={addPost}
//             changePostText={changePostText}
//         />
//     )
// }
type MapStatePropsType = {
    profilePage: ProfilePageType;
}
type MapDispatchPropsType = {
    addPost: () => void;
    changePostText: (postMessage: string) => void;
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        changePostText: (postMessage: string) => {
            dispatch(changeNewPostTextAC(postMessage));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
