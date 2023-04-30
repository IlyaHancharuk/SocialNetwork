import React, { FC, useState } from "react";
import s from './ProfileInfo.module.css';
import SuperEditableSpan from "../../../../SupetEditableSpan/SuperEditableSpan";


type ProfileStatusPropsType = {
    
}

const ProfileStatus: FC<ProfileStatusPropsType> = (props) => {
    const [status, setStatus] = useState('status');
    return (
        <SuperEditableSpan value={status} onChangeText={setStatus} spanProps={{children: status ? undefined : 'enter text...'}}/>
    )
}

export default ProfileStatus;
