import MyPosts from "./MyPosts";
import { addPostAC } from "../../../../Redux/redusers/profileReduser";
import { connect } from "react-redux";
import { AppStateType } from "../../../../Redux/redux-store";
import { ProfilePageType } from "../../../../types";

type MapStatePropsType = {
    profilePage: ProfilePageType;
}
type MapDispatchPropsType = {
    addPost(newPostText: string): void;
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost: addPostAC })(MyPosts);

export default MyPostsContainer;
