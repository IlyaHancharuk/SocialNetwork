import axios from "axios";
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
        return await instance.get(`/users?page=${currentPage}&count=${pageSize}`);
    },

    async followUser (userId: number) {
        return await instance.post(`/follow/${userId}`);
    },

    async unfollowUser (userId: number) {
        return await instance.delete(`/follow/${userId}`);
    },
}

export const profileAPI = {
    async getUserProfile(userId: number) {
        return await instance.get(`/profile/${userId}`);
    },

    async getUserStatus(userId: number) {
        return await instance.get(`/profile/status/${userId}`);
    },

    async updateUserStatus(status: string) {
        return await instance.put(`profile/status`, { status });
    }
}

export const authAPI = {

    async me() {
        return await instance.get(`/auth/me`);
    },

    async login(values: LoginValuesType) {
        return await instance.post(`/auth/login`, { ...values });
    },

    async logout() {
        return await instance.post(`/auth/login`);
    }
}
