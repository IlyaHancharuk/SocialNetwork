import React, { FC, useEffect, useState } from "react";
import SuperEditableSpan from "../../../../SupetEditableSpan/SuperEditableSpan";


type ProfileStatusPropsType = {
    status: string;
    updateUserStatus(status: string): void;
}

const ProfileStatus: FC<ProfileStatusPropsType> = (props) => {
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props]);

    const updateStatus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        props.updateUserStatus(e.currentTarget.value);
    }

    return (
        <SuperEditableSpan value={status}
                           onChangeText={setStatus}
                           onBlur={updateStatus}
                           spanProps={{children: props.status ? undefined : 'enter text...'}}
        />
    )
}

export default ProfileStatus;
