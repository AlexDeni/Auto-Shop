import { createContext } from "react";
import {UserAuthStore} from "./UserAuthStore";
import { AutoListStore } from "./AutoListStore";


export interface IStores{
    UserAuth?: UserAuthStore;
    AutoList?: AutoListStore;
}

const stores: IStores = {};


export const rootStoreContext = createContext({
    UserAuth: new UserAuthStore(stores),
    AutoList: new AutoListStore(stores),
});


export default stores;