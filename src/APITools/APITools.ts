import axios from "axios";
import { AuthResponseType, UserProfileType, UserType } from "../types";

const baseURL = 'https://social-network.samuraijs.com/api/1.0';
const API_KEY = 'c44c7483-d218-46e7-8fde-cd68d45f3f47';

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    }
})

export const getUsers = async (currentPage = 1, pageSize = 10) => {
    const res = await instance
        .get(`${baseURL}/users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            }
        )
    const users: UserType[] = res.data.items;
    const totalCount: number = Number(res.data.totalCount);
    return { users, totalCount };
}

export const getAuth = async () => {
    const res = await instance
        .get(`${baseURL}/auth/me`,
            {
                withCredentials: true,
            }
        );
    if (res.data.resultCode === 0) {
        console.log('authentification is done');
        const data: AuthResponseType = res.data.data;
        return data;
    }
}

export const getProfile = async (userId: number) => {
    const res = await instance
        .get(`${baseURL}/profile/${userId}`);
    const profile: UserProfileType = res.data;
    return profile;
}

export const followUser = async (userId: number) => {
    const res = await instance
        .post(`${baseURL}/follow/${userId}`,
        {},
        {
            withCredentials: true,
            headers: {
                'API-KEY': API_KEY
            }
        }
    )
    const data = res.data;
    return data;
}

export const unfollowUser = async (userId: number) => {
    const res = await instance
        .delete(`${baseURL}/follow/${userId}`,
        {
            withCredentials: true,
            headers: {
                'API-KEY': API_KEY
            }
        }
    )
    const data = res.data;
    return data;
}