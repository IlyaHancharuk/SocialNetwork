import axios from "axios";
import { AuthResponseType, UserProfileType, UserType } from "../types";
import { LoginValuesType } from "../components/Login/LoginPage";

const baseURL = 'https://social-network.samuraijs.com/api/1.0';
const API_KEY = 'c44c7483-d218-46e7-8fde-cd68d45f3f47';

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    }
})

export const userAPI = {
    async getUsers (currentPage = 1, pageSize = 10) {
        const res = await instance
            .get(`/users?page=${currentPage}&count=${pageSize}`,
            )
        const users: UserType[] = res.data.items;
        const totalCount: number = Number(res.data.totalCount);
        return { users, totalCount };
    },

    async followUser (userId: number) {
        const res = await instance
            .post(`/follow/${userId}`,
        )
        const data = res.data;
        return data;
    },

    async unfollowUser (userId: number) {
        const res = await instance
            .delete(`/follow/${userId}`,
        )
        const data = res.data;
        return data;
    },
}

export const profileAPI = {
    async getUserProfile(userId: number) {
        const res = await instance
            .get(`/profile/${userId}`);
        const profile: UserProfileType = res.data;
        return profile;
    },

    async getUserStatus(userId: number) {
        const res = await instance
            .get(`/profile/status/${userId}`);
        return res.data;
    },

    async updateUserStatus(status: string) {
        return await instance
            .put(`profile/status`, { status });
    }
}

export const authAPI = {
    async me() {
        const res = await instance
            .get(`/auth/me`);
        if (res.data.resultCode === 0) {
            console.log('authentification is done');
            const data: AuthResponseType = res.data.data;
            return data;
        }
    },

    async login(values: LoginValuesType) {
        const res = await instance
            .post(`/auth/login`, { ...values });
        if (res.data.resultCode === 0) {
            console.log('loginisation is done');
            return res.data.data.userId;
        }
    }
}
