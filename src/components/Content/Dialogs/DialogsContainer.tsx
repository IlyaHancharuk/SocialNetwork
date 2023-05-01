import { ComponentType } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { DialogsPageType } from "../../../types";
import Dialogs from "./Dialogs";
import { sendMessageAC } from "../../../Redux/redusers/dialogsReducer";
import { AppStateType } from "../../../Redux/redux-store";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsPageType;
}
type MapDispatchPropsType = {
    sendMessage(newMessageText: string): void;
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, { sendMessage: sendMessageAC }),
    withAuthRedirect
)(Dialogs);
