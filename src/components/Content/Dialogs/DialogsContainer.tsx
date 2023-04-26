import { DialogsPageType } from "../../../types";
import Dialogs from "./Dialogs";
import { changeNewMessageTextAC, sendMessageAC } from "../../../Redux/redusers/dialogsReducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../Redux/redux-store";
import { Dispatch } from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    sendMessage: () => void;
    changeMessageText: (message: string) => void;
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        changeMessageText: (message: string) => {
            dispatch(changeNewMessageTextAC(message));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
