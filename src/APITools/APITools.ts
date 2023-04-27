import axios from "axios";
import { UserType } from "../types";

export const getUsers = async () => {
    const promise = axios.get('https://social-network.samuraijs.com/api/1.0/users');
    const response = await promise;
    const users: UserType[] = await response.data.items;
    const totalCount: number = Number(await response.data.totalCount);
    return { users, totalCount };
}