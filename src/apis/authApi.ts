import axiosClient from "./axiosClient"
import { appInfo } from '../constants/appInfos';


class AuthAPI {
    HandleAuthentication = async (
        url: string,
        data?: any,
        method?: 'get' | 'post' | 'put' | 'delete' | 'patch',
    ) => {
        return await axiosClient(`/auth${url}`, {
            method: method ?? 'get',
            data
        });
    }
}


const authentication = new AuthAPI();

export default authentication;