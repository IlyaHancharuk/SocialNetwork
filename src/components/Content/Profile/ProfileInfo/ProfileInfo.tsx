import React, { FC } from "react";
import s from './ProfileInfo.module.css';
import { UserProfileType } from "../../../../types";

type ProfileInfoPropsType = {
    userProfile: UserProfileType | null
}

const ProfileInfo: FC<ProfileInfoPropsType> = ({ userProfile }) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.userAvatar}>
                <img src={userProfile?.photos.large} alt="user-avatar" />
            </div>
            <div className="userMainInfo">
                <h2>{userProfile?.fullName}</h2>
                <h3>{userProfile?.aboutMe}</h3>
                <ul>
                    {userProfile?.contacts.mainLink && <li>MainLink: <a href={userProfile?.contacts.mainLink}>{userProfile?.contacts.mainLink}</a></li>}
                    {userProfile?.contacts.facebook && <li>Facebook: <a href={userProfile?.contacts.facebook}>{userProfile?.contacts.facebook}</a></li>}
                    {userProfile?.contacts.twitter && <li>Twitter: <a href={userProfile?.contacts.twitter}>{userProfile?.contacts.twitter}</a></li>}
                    {userProfile?.contacts.vk && <li>VK: <a href={userProfile?.contacts.vk}>{userProfile?.contacts.vk}</a></li>}
                    {userProfile?.contacts.github && <li>GitHub: <a href={userProfile?.contacts.github}>{userProfile?.contacts.github}</a></li>}
                    {userProfile?.contacts.instagram && <li>Instagram: <a href={userProfile?.contacts.instagram}>{userProfile?.contacts.instagram}</a></li>}
                    {userProfile?.contacts.youtube && <li>Youtube: <a href={userProfile?.contacts.youtube}>{userProfile?.contacts.youtube}</a></li>}
                    {userProfile?.contacts.website && <li>Website: <a href={userProfile?.contacts.website}>{userProfile?.contacts.website}</a></li>}
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;
