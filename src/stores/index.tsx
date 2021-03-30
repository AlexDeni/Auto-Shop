import {CounterStore} from "./Counter";
import { createContext } from "react";
import {UserAuthStore} from "./UserAuth";


export interface IStores{
    Counter?: CounterStore;
    UserAuth?: UserAuthStore;
}

const stores: IStores = {};


export const rootStoreContext = createContext({
    Counter: new CounterStore(stores),
    UserAuth: new UserAuthStore(stores),
});


export default stores;